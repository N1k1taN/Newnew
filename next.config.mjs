/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Настройка для статического экспорта
    images: {
      unoptimized: true, // Отключаем оптимизацию изображений
    },
  };
  
  export default nextConfig;
  