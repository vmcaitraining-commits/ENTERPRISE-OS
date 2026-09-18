import React, { useState } from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { Shield, Eye, EyeOff, Loader2 } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const { authService, status } = useAdminAuth();
  const { navigate } = usePublicRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await authService.signInWithPassword(email, password);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Đăng nhập thất bại. Vui lòng thử lại.');
      setLoading(false);
    }
  };

  if (status === 'NOT_CONFIGURED') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-[#0F172A]">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm max-w-md w-full text-center">
          <Shield className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-800 mb-2">Hệ thống chưa được cấu hình</h2>
          <p className="text-sm text-slate-500">
            Tính năng xác thực quản trị viên chưa được kết nối với cơ sở dữ liệu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-[#0F172A]">
      <div className="w-full max-w-[400px]">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0F172A] text-white mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">VMC Group</h1>
          <p className="text-sm text-slate-500 font-medium">Hệ thống quản trị doanh nghiệp</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600 font-medium">
                {error}
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">
                Email / Tên đăng nhập
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm disabled:opacity-50 disabled:bg-slate-50"
                placeholder="admin@vmcgroup.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 block">
                  Mật khẩu
                </label>
                <button 
                  type="button" 
                  disabled
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 opacity-50 cursor-not-allowed"
                  title="Tính năng quên mật khẩu chưa được kích hoạt"
                >
                  Quên mật khẩu?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm pr-10 disabled:opacity-50 disabled:bg-slate-50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Đang đăng nhập...
                </>
              ) : (
                'Đăng nhập hệ thống'
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-6 space-y-2 text-xs text-slate-500">
          <p>Môi trường VMC Admin. Chỉ dành cho quản trị viên được cấp phép.</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-slate-600 hover:text-slate-900 underline font-medium cursor-pointer"
          >
            ← Quay về Website công khai (vmcgroup.com)
          </button>
        </div>
      </div>
    </div>
  );
};
