import { detailedIndustriesData } from '../../../data/industryDetailedData';

const viIndustries = {
  overview: {
    badge: 'KIẾN TRÚC NGHIỆP VỤ CHUYÊN BIỆT',
    badgeSubtitle: '8 Nhóm Ngành Cốt Lõi',
    title: 'Giải Pháp AI ENTERPRISE',
    titleHighlight: 'Theo 8 Ngành Trọng Tâm',
    subtitle: 'Không áp đặt một bộ card chung chung. Mỗi ngành nghề có một câu chuyện vận hành, điểm nghẽn đặc thù và cấu hình phân hệ riêng biệt nhằm giải quyết đúng bài toán kinh doanh.',
    sectionHeader: 'Danh Sách 8 Ngành Nghề Được Cấu Hình Chuẩn Hóa',
    sectionSubheader: 'Bấm vào từng ngành để xem một ngày vận hành, điểm nghẽn trên hành trình và demo AI tương ứng.',
    sectorCounter: '8 / 8 Tuyến Ngành',
    flowLabel: 'Hành trình dòng chảy:',
    exploreCardLink: 'Khám phá chi tiết ngành',
    survey: {
      badge: 'NGÀNH NGHỀ ĐẶC THÙ KHÁC',
      title: 'Doanh nghiệp của bạn thuộc ngành nghề khác?',
      description: 'VMC Group cung cấp dịch vụ khảo sát hiện trạng và thiết kế cấu trúc vận hành riêng cho các ngành đặc thù (Y tế, Nông nghiệp công nghệ cao, Logistics, Tài chính - Bảo hiểm...) với quy trình đánh giá 1-1 bảo mật.',
      ndaBadge: 'Bảo mật dữ liệu kinh doanh theo cam kết NDA chính thức',
      ctaButton: 'Yêu cầu khảo sát kiến trúc chuyên biệt',
      preselectedOption: 'Ngành nghề khác (Yêu cầu khảo sát)'
    }
  },
  detail: {
    breadcrumb: 'Ngành triển khai',
    architectureBadge: 'Kiến trúc Vận hành Chuyên ngành',
    titlePrefix: 'Giải Pháp Doanh Nghiệp',
    problemSummaryHeading: 'Thực trạng vận hành phổ biến:',
    surveyCta: 'Khảo sát hiện trạng ngành {{name}}',
    viewDailyCta: 'Xem một ngày vận hành',
    snapshot: {
      heading: 'BỐI CẢNH VẬN HÀNH THỰC TẾ',
      badge: 'Kịch bản chuẩn hóa',
      dailyVolumeLabel: 'Khối lượng giao dịch/ngày:',
      primaryChannelsLabel: 'Kênh tương tác chủ đạo:',
      keyConstraintLabel: 'Ràng buộc sống còn:',
      complianceNoteLabel: 'Lưu ý tuân thủ:',
      disclaimer: '* Mô phỏng cấu trúc thông tin tác nghiệp theo chuẩn VMC AI ENTERPRISE.'
    },
    daily: {
      badge: 'MỘT NGÀY TÁC NGHIỆP THỰC TẾ',
      heading: 'Dòng Chảy Công Việc Từ Sáng Đến Tối',
      subheading: 'Khác với việc quản lý rời rạc qua chat và file Excel, mọi mắt xích trong ngày của {{name}} đều được kết nối liền mạch.',
      actorLabel: 'Vai trò',
      systemActionLabel: 'Hành động hệ thống'
    },
    modules: {
      badge: 'CẤU HÌNH PHÂN HỆ TẬP TRUNG',
      heading: 'Các Module Cốt Lõi Cho Ngành {{name}}',
      subheading: 'Không triển khai dàn trải tính năng thừa. Hệ thống kích hoạt chính xác các phân hệ giải quyết đúng bài toán nghiệp vụ của ngành.',
      interopLabel: 'Khả năng liên thông',
      inputDataLabel: 'Dữ liệu đầu vào:',
      coreProcessLabel: 'Quy trình xử lý cốt lõi:',
      outputDataLabel: 'Đầu ra & Chốt kiểm soát:'
    },
    kpi: {
      badge: 'ĐO LƯỜNG HIỆU QUẢ THỰC TẾ',
      heading: 'Chỉ Số Vận Hành Cốt Lõi Nên Theo Dõi',
      subheading: 'Các chỉ số này phản ánh sức khỏe vận hành và năng lực phục vụ của doanh nghiệp, có thể theo dõi trực tiếp trên phân hệ Scope J.',
      kpiIndexLabel: 'Chỉ số',
      formulaLabel: 'Cách tính:',
      benchmarkLabel: 'Mục tiêu khuyến nghị:',
      businessImpactLabel: 'Tác động kinh doanh:',
      disclaimer: '* Dữ liệu mô phỏng phục vụ minh họa phương pháp luận quản trị chỉ số.'
    },
    roadmap: {
      badge: 'LỘ TRÌNH TRIỂN KHAI THỰC TẾ',
      heading: '3 Giai Đoạn Vận Hành Chắc Chắn',
      subheading: 'Triển khai theo phương pháp cuốn chiếu có kiểm soát: chuẩn hóa dữ liệu trước, tự động hóa quy trình sau, kích hoạt AI tối ưu.',
      deliverablesLabel: 'Kết quả bàn giao then chốt:'
    },
    cta: {
      badge: 'KHẢO SÁT CHUYÊN BIỆT THEO NGÀNH {{nameUpper}}',
      heading: 'Sẵn Sàng Chuẩn Hóa Vận Hành Cho Doanh Nghiệp Của Bạn?',
      description: 'Đội ngũ chuyên gia VMC Group sẽ cùng bạn rà soát các điểm nghẽn thực tế và thiết kế cấu hình module phù hợp với quy mô hiện tại.',
      submitButton: 'Đăng ký tư vấn chuyên sâu ngành {{name}}',
      exploreOtherButton: 'Khám phá 7 ngành nghề khác',
      preselectedNote: 'Ngành "{{name}}" sẽ được giữ sẵn trong mẫu đăng ký khảo sát.'
    }
  },
  visuals: {
    journey: {
      badge: 'HÀNH TRÌNH VẬN HÀNH & ĐIỂM NGHẼN THỰC TẾ',
      heading: 'Luồng Dữ Liệu Nghiệp Vụ — {{industryName}}',
      subheading: 'Bấm vào từng bước trên hành trình để xem đối soát chi tiết và cách hệ thống xử lý điểm nghẽn.',
      legendNormalized: 'Chuẩn hóa',
      legendBottleneck: 'Điểm nghẽn rủi ro cao',
      bottleneckBadge: 'Nghẽn',
      smoothBadge: 'Thông suốt',
      phaseLabel: 'Giai đoạn {{step}} / {{total}}',
      bottleneckTitle: 'Điểm nghẽn vận hành thực tế:',
      systemSupportTitle: 'Hệ thống AI ENTERPRISE can thiệp:',
      statusLabel: 'Trạng thái:',
      statusControlled: 'Được kiểm soát chốt chặn',
      statusStandard: 'Chuẩn hóa theo kịch bản',
      interfaceLabel: 'Giao diện hỗ trợ: Màn hình nghiệp vụ tập trung'
    },
    aiDemo: {
      badge: 'MÔ PHỎNG TÁC NGHIỆP TRỢ LÝ AI CHUYÊN NGÀNH',
      runSimulation: 'Chạy mô phỏng phân tích AI',
      processingText: 'Đang phân tích dữ liệu...',
      liveState: 'Live State',
      processingWait: 'Trợ lý AI đang đối soát dữ liệu & quy tắc ngành...',
      summaryHeading: 'Kết luận sơ bộ từ hệ thống:',
      recommendationsHeading: 'Khuyến nghị hành động tối ưu:',
      actionItemsHeading: 'Hành động hệ thống đề xuất nhân sự thực hiện:',
      riskLevel: {
        high: 'MỨC ĐỘ RỦI RO: CAO',
        medium: 'MỨC ĐỘ RỦI RO: TRUNG BÌNH',
        low: 'MỨC ĐỘ RỦI RO: THẤP'
      }
    }
  },
  sectors: detailedIndustriesData
};

export default viIndustries;
