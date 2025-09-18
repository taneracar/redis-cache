//! sayfa kopyalamalarını engellemek için middleware'e kod yazmak gerekiyor tüm root sayfaları buraya da eklemek gerekiyor. eğer yeni bir root sayfa yapılıyorsa mutlaka buradaki array içine de eklenmeli

export const rootPages: string[] = [
  "hakkimizda",
  "haberler",
  "kariyer",
  "iletisim",
  "surdurulebilirlik",
  "sosyal-sorumluluk",
  "yonetim-kadrosu",
  "kvkk-politikasi",
  "surdurulebilirlik-raporlari",
  "markalarimiz",
  "tarihimiz",
  "dunyada-kervan",
  "basin-odasi",
  "belgeler-sertifikalar",
  "politikalar",
] as const;
