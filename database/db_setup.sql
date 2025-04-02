-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS ecopark CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ecolife_db;

-- Tạo bảng users - Admin users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng projects - Dự án bất động sản
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  content TEXT,
  thumbnail_url TEXT,
  category VARCHAR(255),
  is_featured BOOLEAN DEFAULT FALSE,
  -- SEO fields
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  og_image TEXT,
  canonical_url VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tạo bảng news - Tin tức & sự kiện
CREATE TABLE IF NOT EXISTS news (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  summary TEXT,
  content TEXT,
  thumbnail_url TEXT,
  -- SEO fields
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  og_image TEXT,
  canonical_url VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tạo bảng slides - Hero slider
CREATE TABLE IF NOT EXISTS slides (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  button_text VARCHAR(255),
  button_link VARCHAR(255),
  button_url TEXT,
  `order` INT NOT NULL
);

-- Tạo bảng amenities - Tiện ích
CREATE TABLE IF NOT EXISTS amenities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(255),
  image_url TEXT,
  `order` INT
);

-- Tạo bảng contacts - Liên hệ
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  project VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng site_settings - Cài đặt trang web
CREATE TABLE IF NOT EXISTS site_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  logo_url TEXT,
  site_name VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(255),
  address TEXT,
  facebook_url TEXT,
  youtube_url TEXT,
  zalo_url TEXT,
  -- Thông tin phần footer
  office_address TEXT,
  office_district VARCHAR(255),
  office_city VARCHAR(255),
  office_phone VARCHAR(255),
  office_phone2 VARCHAR(255),
  office_email VARCHAR(255),
  -- Thông tin Google Map
  google_map_url TEXT,
  google_map_api_key VARCHAR(255),
  google_map_lat VARCHAR(255),
  google_map_lng VARCHAR(255),
  google_map_zoom VARCHAR(255),
  -- Thông tin công ty
  company_name VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255),
  instagram_url TEXT,
  -- Cấu hình email
  email_smtp_host VARCHAR(255),
  email_smtp_port VARCHAR(255),
  email_smtp_secure VARCHAR(255),
  email_smtp_user VARCHAR(255),
  email_smtp_pass VARCHAR(255),
  email_notification_recipient VARCHAR(255),
  -- Cấu hình SEO
  default_meta_title VARCHAR(255),
  default_meta_description TEXT,
  default_meta_keywords TEXT,
  default_og_image TEXT,
  google_analytics_id VARCHAR(255),
  google_tag_manager_id VARCHAR(255),
  robots_txt TEXT,
  sitemap_enabled BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tạo bảng menus - Menu điều hướng
CREATE TABLE IF NOT EXISTS menus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  `order` INT NOT NULL,
  parent_id INT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  show_on_homepage BOOLEAN DEFAULT FALSE,
  home_image TEXT,
  home_title VARCHAR(255),
  home_description TEXT,
  home_content TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_id) REFERENCES menus(id) ON DELETE SET NULL
);

-- Tạo bảng session storage for express-session
CREATE TABLE IF NOT EXISTS sessions (
  session_id VARCHAR(128) NOT NULL UNIQUE,
  expires INT UNSIGNED NOT NULL,
  data TEXT,
  PRIMARY KEY (session_id)
);