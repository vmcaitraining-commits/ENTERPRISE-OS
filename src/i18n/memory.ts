/**
 * VMC Group Multilingual System
 * Phase 3 — Translation Memory (TM) Structure
 *
 * Provides consistent segment reuse for approved enterprise translations.
 * Prevents fragmented translation variants when context and source match.
 */

import { LocaleCode, TranslationStatus, GlossaryCategory } from './types';

export interface TranslationMemoryEntry {
  id: string;
  sourceVi: string;
  sourceHash: string;
  locale: LocaleCode;
  targetText: string;
  context?: string;
  category?: GlossaryCategory;
  status: 'APPROVED' | 'PUBLISHED';
  usageCount: number;
  approvedAt: string;
}

export class TranslationMemoryStore {
  private entries: Map<string, TranslationMemoryEntry> = new Map();

  /**
   * Generates a composite key for exact context matching
   */
  private buildKey(sourceVi: string, locale: LocaleCode, context?: string): string {
    const normSource = sourceVi.trim().toLowerCase();
    const normContext = (context || 'default').trim().toLowerCase();
    return `${locale}:${normContext}:${normSource}`;
  }

  /**
   * Registers or updates an approved segment in Translation Memory
   */
  public register(
    sourceVi: string,
    sourceHash: string,
    locale: LocaleCode,
    targetText: string,
    context?: string,
    category?: GlossaryCategory,
    status: 'APPROVED' | 'PUBLISHED' = 'APPROVED'
  ): TranslationMemoryEntry {
    const key = this.buildKey(sourceVi, locale, context);
    const existing = this.entries.get(key);

    const entry: TranslationMemoryEntry = {
      id: existing ? existing.id : `tm_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      sourceVi,
      sourceHash,
      locale,
      targetText,
      context,
      category,
      status,
      usageCount: existing ? existing.usageCount + 1 : 1,
      approvedAt: existing ? existing.approvedAt : new Date().toISOString()
    };

    this.entries.set(key, entry);
    return entry;
  }

  /**
   * Look up matching approved translation in Translation Memory
   */
  public lookup(
    sourceVi: string,
    locale: LocaleCode,
    context?: string
  ): TranslationMemoryEntry | null {
    // 1. Try exact context match
    const exactKey = this.buildKey(sourceVi, locale, context);
    const exactMatch = this.entries.get(exactKey);
    if (exactMatch && (exactMatch.status === 'APPROVED' || exactMatch.status === 'PUBLISHED')) {
      return exactMatch;
    }

    // 2. Fallback to default context if custom context wasn't found
    if (context && context !== 'default') {
      const fallbackKey = this.buildKey(sourceVi, locale, 'default');
      const fallbackMatch = this.entries.get(fallbackKey);
      if (fallbackMatch && (fallbackMatch.status === 'APPROVED' || fallbackMatch.status === 'PUBLISHED')) {
        return fallbackMatch;
      }
    }

    return null;
  }

  /**
   * Returns all stored approved translation segments
   */
  public getAllEntries(): TranslationMemoryEntry[] {
    return Array.from(this.entries.values());
  }

  /**
   * Clears in-memory store (primarily for unit test isolation)
   */
  public clear(): void {
    this.entries.clear();
  }
}

// Global singleton instance for applet session
export const globalTranslationMemory = new TranslationMemoryStore();
