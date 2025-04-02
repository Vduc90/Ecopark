var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  amenities: () => amenities,
  contacts: () => contacts,
  contactsRelations: () => contactsRelations,
  insertAmenitySchema: () => insertAmenitySchema,
  insertContactSchema: () => insertContactSchema,
  insertMenuSchema: () => insertMenuSchema,
  insertNewsSchema: () => insertNewsSchema,
  insertProjectSchema: () => insertProjectSchema,
  insertSiteSettingsSchema: () => insertSiteSettingsSchema,
  insertSlideSchema: () => insertSlideSchema,
  insertUserSchema: () => insertUserSchema,
  menus: () => menus,
  menusRelations: () => menusRelations,
  news: () => news,
  projects: () => projects,
  siteSettings: () => siteSettings,
  slides: () => slides,
  users: () => users
});
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true
}).extend({
  password: z.string().optional()
});
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  content: text("content"),
  thumbnailUrl: text("thumbnail_url"),
  category: text("category"),
  isFeatured: boolean("is_featured").default(false),
  // SEO fields
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  ogImage: text("og_image"),
  canonicalUrl: text("canonical_url"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true
});
var news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  summary: text("summary"),
  content: text("content"),
  thumbnailUrl: text("thumbnail_url"),
  // SEO fields
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  ogImage: text("og_image"),
  canonicalUrl: text("canonical_url"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var insertNewsSchema = createInsertSchema(news).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var slides = pgTable("slides", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  buttonText: text("button_text"),
  buttonLink: text("button_link"),
  buttonUrl: text("button_url"),
  order: integer("order").notNull()
});
var insertSlideSchema = createInsertSchema(slides).omit({
  id: true
});
var amenities = pgTable("amenities", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  icon: text("icon"),
  imageUrl: text("image_url"),
  order: integer("order")
});
var insertAmenitySchema = createInsertSchema(amenities).omit({
  id: true
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  project: text("project"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});
var siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  logoUrl: text("logo_url"),
  siteName: text("site_name"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  address: text("address"),
  facebookUrl: text("facebook_url"),
  youtubeUrl: text("youtube_url"),
  zaloUrl: text("zalo_url"),
  // Thông tin phần footer
  officeAddress: text("office_address"),
  officeDistrict: text("office_district"),
  officeCity: text("office_city"),
  officePhone: text("office_phone"),
  officePhone2: text("office_phone2"),
  officeEmail: text("office_email"),
  // Thông tin Google Map
  googleMapUrl: text("google_map_url"),
  googleMapApiKey: text("google_map_api_key"),
  googleMapLat: text("google_map_lat"),
  googleMapLng: text("google_map_lng"),
  googleMapZoom: text("google_map_zoom"),
  // Thông tin công ty
  companyName: text("company_name"),
  phone: text("phone"),
  email: text("email"),
  instagramUrl: text("instagram_url"),
  // Cấu hình email
  emailSmtpHost: text("email_smtp_host"),
  emailSmtpPort: text("email_smtp_port"),
  emailSmtpSecure: text("email_smtp_secure"),
  emailSmtpUser: text("email_smtp_user"),
  emailSmtpPass: text("email_smtp_pass"),
  emailNotificationRecipient: text("email_notification_recipient"),
  // Cấu hình SEO
  defaultMetaTitle: text("default_meta_title"),
  defaultMetaDescription: text("default_meta_description"),
  defaultMetaKeywords: text("default_meta_keywords"),
  defaultOgImage: text("default_og_image"),
  googleAnalyticsId: text("google_analytics_id"),
  googleTagManagerId: text("google_tag_manager_id"),
  robotsTxt: text("robots_txt"),
  sitemapEnabled: boolean("sitemap_enabled").default(true),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var insertSiteSettingsSchema = createInsertSchema(siteSettings).omit({
  id: true,
  updatedAt: true
});
var menus = pgTable("menus", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  order: integer("order").notNull(),
  parentId: integer("parent_id"),
  isActive: boolean("is_active").notNull().default(true),
  showOnHomepage: boolean("show_on_homepage").default(false),
  homeImage: text("home_image"),
  homeTitle: text("home_title"),
  homeDescription: text("home_description"),
  homeContent: text("home_content"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
var insertMenuSchema = createInsertSchema(menus).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var menusRelations = relations(menus, ({ one, many }) => ({
  parent: one(menus, {
    fields: [menus.parentId],
    references: [menus.id]
  }),
  children: many(menus)
}));
var contactsRelations = relations(contacts, ({ one }) => ({
  project: one(projects, {
    fields: [contacts.project],
    references: [projects.slug]
  })
}));

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq, desc } from "drizzle-orm";
var MemStorage = class {
  users;
  projects;
  newsItems;
  slides;
  amenities;
  contacts;
  siteSettings;
  menus;
  userCurrentId;
  projectCurrentId;
  newsCurrentId;
  slideCurrentId;
  amenityCurrentId;
  contactCurrentId;
  siteSettingsCurrentId;
  menuCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.newsItems = /* @__PURE__ */ new Map();
    this.slides = /* @__PURE__ */ new Map();
    this.amenities = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.siteSettings = /* @__PURE__ */ new Map();
    this.menus = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.projectCurrentId = 1;
    this.newsCurrentId = 1;
    this.slideCurrentId = 1;
    this.amenityCurrentId = 1;
    this.contactCurrentId = 1;
    this.siteSettingsCurrentId = 1;
    this.menuCurrentId = 1;
    this.initializeDemoData().catch((err) => {
      console.error("Error initializing demo data:", err);
    });
  }
  // Users
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userCurrentId++;
    const user = {
      ...insertUser,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.users.set(id, user);
    return user;
  }
  // Projects
  async getAllProjects() {
    return Array.from(this.projects.values());
  }
  async getProjectById(id) {
    return this.projects.get(id);
  }
  async getProjectBySlug(slug) {
    return Array.from(this.projects.values()).find(
      (project) => project.slug === slug
    );
  }
  async createProject(insertProject) {
    const id = this.projectCurrentId++;
    const project = {
      id,
      title: insertProject.title,
      slug: insertProject.slug,
      description: insertProject.description || null,
      content: insertProject.content || null,
      thumbnailUrl: insertProject.thumbnailUrl || null,
      category: insertProject.category || null,
      isFeatured: insertProject.isFeatured || false,
      metaTitle: insertProject.metaTitle || null,
      metaDescription: insertProject.metaDescription || null,
      metaKeywords: insertProject.metaKeywords || null,
      ogImage: insertProject.ogImage || null,
      canonicalUrl: insertProject.canonicalUrl || null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.projects.set(id, project);
    return project;
  }
  async updateProject(id, updateProject) {
    const project = this.projects.get(id);
    if (!project) return void 0;
    const updatedProject = { ...project, ...updateProject };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  async deleteProject(id) {
    return this.projects.delete(id);
  }
  // News
  async getAllNews() {
    return Array.from(this.newsItems.values());
  }
  async getNewsById(id) {
    return this.newsItems.get(id);
  }
  async getNewsBySlug(slug) {
    return Array.from(this.newsItems.values()).find(
      (news2) => news2.slug === slug
    );
  }
  async createNews(insertNews) {
    const id = this.newsCurrentId++;
    const news2 = {
      id,
      title: insertNews.title,
      slug: insertNews.slug,
      summary: insertNews.summary || null,
      content: insertNews.content || null,
      thumbnailUrl: insertNews.thumbnailUrl || null,
      metaTitle: insertNews.metaTitle || null,
      metaDescription: insertNews.metaDescription || null,
      metaKeywords: insertNews.metaKeywords || null,
      ogImage: insertNews.ogImage || null,
      canonicalUrl: insertNews.canonicalUrl || null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.newsItems.set(id, news2);
    return news2;
  }
  async updateNews(id, updateNews) {
    const news2 = this.newsItems.get(id);
    if (!news2) return void 0;
    const updatedNews = { ...news2, ...updateNews };
    this.newsItems.set(id, updatedNews);
    return updatedNews;
  }
  async deleteNews(id) {
    return this.newsItems.delete(id);
  }
  // Slides
  async getAllSlides() {
    return Array.from(this.slides.values()).sort((a, b) => a.order - b.order);
  }
  async getSlideById(id) {
    return this.slides.get(id);
  }
  async createSlide(insertSlide) {
    const id = this.slideCurrentId++;
    const slide = {
      id,
      title: insertSlide.title,
      description: insertSlide.description || null,
      imageUrl: insertSlide.imageUrl || null,
      buttonText: insertSlide.buttonText || null,
      buttonLink: insertSlide.buttonLink || null,
      buttonUrl: insertSlide.buttonUrl || null,
      order: insertSlide.order
    };
    this.slides.set(id, slide);
    return slide;
  }
  async updateSlide(id, updateSlide) {
    const slide = this.slides.get(id);
    if (!slide) return void 0;
    const updatedSlide = { ...slide, ...updateSlide };
    this.slides.set(id, updatedSlide);
    return updatedSlide;
  }
  async deleteSlide(id) {
    return this.slides.delete(id);
  }
  // Amenities
  async getAllAmenities() {
    return Array.from(this.amenities.values());
  }
  async getAmenityById(id) {
    return this.amenities.get(id);
  }
  async createAmenity(insertAmenity) {
    const id = this.amenityCurrentId++;
    const amenity = {
      id,
      title: insertAmenity.title,
      description: insertAmenity.description || null,
      icon: insertAmenity.icon || null,
      imageUrl: insertAmenity.imageUrl || null,
      order: insertAmenity.order || null
    };
    this.amenities.set(id, amenity);
    return amenity;
  }
  async updateAmenity(id, updateAmenity) {
    const amenity = this.amenities.get(id);
    if (!amenity) return void 0;
    const updatedAmenity = { ...amenity, ...updateAmenity };
    this.amenities.set(id, updatedAmenity);
    return updatedAmenity;
  }
  async deleteAmenity(id) {
    return this.amenities.delete(id);
  }
  // Contacts
  async getAllContacts() {
    return Array.from(this.contacts.values());
  }
  async getContactById(id) {
    return this.contacts.get(id);
  }
  async createContact(insertContact) {
    const id = this.contactCurrentId++;
    const contact = {
      ...insertContact,
      id,
      project: insertContact.project || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
  async deleteContact(id) {
    return this.contacts.delete(id);
  }
  // Site Settings
  async getSiteSettings() {
    const settings = Array.from(this.siteSettings.values())[0];
    return settings;
  }
  async updateSiteSettings(settings) {
    const existingSettings = await this.getSiteSettings();
    if (existingSettings) {
      const updatedSettings = {
        ...existingSettings,
        ...settings,
        updatedAt: /* @__PURE__ */ new Date()
      };
      this.siteSettings.set(existingSettings.id, updatedSettings);
      return updatedSettings;
    } else {
      const id = this.siteSettingsCurrentId++;
      const newSettings = {
        id,
        logoUrl: settings.logoUrl || null,
        siteName: settings.siteName || "Ecolife",
        contactEmail: settings.contactEmail || null,
        contactPhone: settings.contactPhone || null,
        address: settings.address || null,
        facebookUrl: settings.facebookUrl || null,
        youtubeUrl: settings.youtubeUrl || null,
        zaloUrl: settings.zaloUrl || null,
        // Thêm các trường footer mới
        officeAddress: settings.officeAddress || null,
        officeDistrict: settings.officeDistrict || null,
        officeCity: settings.officeCity || null,
        officePhone: settings.officePhone || null,
        officePhone2: settings.officePhone2 || null,
        officeEmail: settings.officeEmail || null,
        googleMapUrl: settings.googleMapUrl || null,
        googleMapApiKey: settings.googleMapApiKey || null,
        googleMapLat: settings.googleMapLat || null,
        googleMapLng: settings.googleMapLng || null,
        googleMapZoom: settings.googleMapZoom || null,
        // Thêm các trường còn thiếu theo schema
        companyName: settings.companyName || null,
        phone: settings.phone || null,
        email: settings.email || null,
        instagramUrl: settings.instagramUrl || null,
        // Cấu hình email
        emailSmtpHost: settings.emailSmtpHost || null,
        emailSmtpPort: settings.emailSmtpPort || null,
        emailSmtpSecure: settings.emailSmtpSecure || null,
        emailSmtpUser: settings.emailSmtpUser || null,
        emailSmtpPass: settings.emailSmtpPass || null,
        emailNotificationRecipient: settings.emailNotificationRecipient || null,
        // Cấu hình SEO
        defaultMetaTitle: settings.defaultMetaTitle || null,
        defaultMetaDescription: settings.defaultMetaDescription || null,
        defaultMetaKeywords: settings.defaultMetaKeywords || null,
        defaultOgImage: settings.defaultOgImage || null,
        googleAnalyticsId: settings.googleAnalyticsId || null,
        googleTagManagerId: settings.googleTagManagerId || null,
        robotsTxt: settings.robotsTxt || null,
        sitemapEnabled: settings.sitemapEnabled ?? true,
        updatedAt: /* @__PURE__ */ new Date()
      };
      this.siteSettings.set(id, newSettings);
      return newSettings;
    }
  }
  // Menus
  async getAllMenus() {
    return Array.from(this.menus.values());
  }
  async getActiveMenus() {
    console.log("Active Menus:", Array.from(this.menus.values()).filter((menu) => menu.isActive));
    return Array.from(this.menus.values()).filter((menu) => menu.isActive);
  }
  async getMenuById(id) {
    return this.menus.get(id);
  }
  async createMenu(insertMenu) {
    const id = this.menuCurrentId++;
    const menu = {
      ...insertMenu,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      isActive: insertMenu.isActive ?? true,
      parentId: insertMenu.parentId ?? null,
      showOnHomepage: insertMenu.showOnHomepage ?? false,
      homeImage: insertMenu.homeImage ?? null,
      homeTitle: insertMenu.homeTitle ?? null,
      homeDescription: insertMenu.homeDescription ?? null,
      homeContent: insertMenu.homeContent ?? null
    };
    this.menus.set(id, menu);
    return menu;
  }
  async updateMenu(id, updateMenu) {
    const menu = this.menus.get(id);
    if (!menu) return void 0;
    const updatedMenu = {
      ...menu,
      ...updateMenu,
      showOnHomepage: updateMenu.showOnHomepage ?? menu.showOnHomepage ?? false,
      homeImage: updateMenu.homeImage ?? menu.homeImage ?? null,
      homeTitle: updateMenu.homeTitle ?? menu.homeTitle ?? null,
      homeDescription: updateMenu.homeDescription ?? menu.homeDescription ?? null,
      homeContent: updateMenu.homeContent ?? menu.homeContent ?? null,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.menus.set(id, updatedMenu);
    return updatedMenu;
  }
  async deleteMenu(id) {
    return this.menus.delete(id);
  }
  // Initialize with demo data
  async initializeDemoData() {
    await this.createUser({
      username: "admin",
      password: "admin123",
      name: "Admin User",
      email: "admin@ecolife.vn",
      passwordHash: "admin123"
      // Temporary for demo, in production this would be hashed
    });
    await this.createSlide({
      title: "Swanlake Residences",
      description: "Kh\xF4ng gian s\u1ED1ng xanh \u0111\u1EB3ng c\u1EA5p b\xEAn h\u1ED3 thi\xEAn nga",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      buttonText: "KH\xC1M PH\xC1 NGAY",
      buttonLink: "/du-an/swanlake-residences",
      order: 1
    });
    await this.createSlide({
      title: "Marina Bay Villas",
      description: "Bi\u1EC7t th\u1EF1 ngh\u1EC9 d\u01B0\u1EE1ng view bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p",
      imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      buttonText: "KH\xC1M PH\xC1 NGAY",
      buttonLink: "/du-an/marina-bay-villas",
      order: 2
    });
    await this.createSlide({
      title: "Sky Oasis Apartments",
      description: "C\u0103n h\u1ED9 cao c\u1EA5p gi\u1EEFa l\xF2ng ph\u1ED1 th\u1ECB",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
      buttonText: "KH\xC1M PH\xC1 NGAY",
      buttonLink: "/du-an/sky-oasis-apartments",
      order: 3
    });
    await this.createProject({
      title: "Swanlake Residences",
      slug: "swanlake-residences",
      description: "Bi\u1EC7t th\u1EF1 ven h\u1ED3 Swanlake Residences l\xE0 d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 \u0111\u01A1n l\u1EADp cao c\u1EA5p mang phong c\xE1ch ki\u1EBFn tr\xFAc hi\u1EC7n \u0111\u1EA1i, n\u1EB1m ven h\u1ED3 thi\xEAn nga t\u1EF1 nhi\xEAn r\u1ED9ng l\u1EDBn. Kh\xF4ng gian s\u1ED1ng n\u01A1i \u0111\xE2y \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EC3 mang \u0111\u1EBFn s\u1EF1 h\xE0i h\xF2a gi\u1EEFa cu\u1ED9c s\u1ED1ng v\xE0 thi\xEAn nhi\xEAn, \u0111\u1EA3m b\u1EA3o m\u1ECDi th\xE0nh vi\xEAn trong gia \u0111\xECnh \u0111\u1EC1u c\xF3 kh\xF4ng gian ri\xEAng t\u01B0 v\xE0 tho\u1EA3i m\xE1i. V\u1EDBi di\u1EC7n t\xEDch t\u1EEB 300-500m\xB2, m\u1ED7i c\u0103n bi\u1EC7t th\u1EF1 \u0111\u1EC1u c\xF3 4-6 ph\xF2ng ng\u1EE7, ph\xF9 h\u1EE3p cho c\u1EA3 gia \u0111\xECnh \u0111a th\u1EBF h\u1EC7. C\xE1c ti\u1EC7n \xEDch xung quanh bao g\u1ED3m c\xF4ng vi\xEAn, s\xE2n ch\u01A1i tr\u1EBB em, khu BBQ, v\xE0 \u0111\u01B0\u1EDDng d\u1EA1o b\u1ED9 ven h\u1ED3.",
      content: "<p>Bi\u1EC7t th\u1EF1 ven h\u1ED3 Swanlake Residences l\xE0 d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 \u0111\u01A1n l\u1EADp cao c\u1EA5p mang phong c\xE1ch ki\u1EBFn tr\xFAc hi\u1EC7n \u0111\u1EA1i, n\u1EB1m ven h\u1ED3 thi\xEAn nga t\u1EF1 nhi\xEAn r\u1ED9ng l\u1EDBn. Kh\xF4ng gian s\u1ED1ng n\u01A1i \u0111\xE2y \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EC3 mang \u0111\u1EBFn s\u1EF1 h\xE0i h\xF2a gi\u1EEFa cu\u1ED9c s\u1ED1ng v\xE0 thi\xEAn nhi\xEAn, \u0111\u1EA3m b\u1EA3o m\u1ECDi th\xE0nh vi\xEAn trong gia \u0111\xECnh \u0111\u1EC1u c\xF3 kh\xF4ng gian ri\xEAng t\u01B0 v\xE0 tho\u1EA3i m\xE1i.</p><p>V\u1EDBi di\u1EC7n t\xEDch t\u1EEB 300-500m\xB2, m\u1ED7i c\u0103n bi\u1EC7t th\u1EF1 \u0111\u1EC1u c\xF3 4-6 ph\xF2ng ng\u1EE7, ph\xF9 h\u1EE3p cho c\u1EA3 gia \u0111\xECnh \u0111a th\u1EBF h\u1EC7. C\xE1c ti\u1EC7n \xEDch xung quanh bao g\u1ED3m c\xF4ng vi\xEAn, s\xE2n ch\u01A1i tr\u1EBB em, khu BBQ, v\xE0 \u0111\u01B0\u1EDDng d\u1EA1o b\u1ED9 ven h\u1ED3.</p>",
      thumbnailUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bi\u1EC7t th\u1EF1",
      isFeatured: true,
      metaTitle: "Swanlake Residences | Bi\u1EC7t th\u1EF1 ven h\u1ED3 cao c\u1EA5p",
      metaDescription: "Bi\u1EC7t th\u1EF1 ven h\u1ED3 v\u1EDBi thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i, kh\xF4ng gian s\u1ED1ng l\xFD t\u01B0\u1EDFng cho gia \u0111\xECnh \u0111a th\u1EBF h\u1EC7",
      metaKeywords: "bi\u1EC7t th\u1EF1, bi\u1EC7t th\u1EF1 ven h\u1ED3, kh\xF4ng gian s\u1ED1ng, thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i, gia \u0111\xECnh \u0111a th\u1EBF h\u1EC7",
      ogImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      canonicalUrl: "/du-an/swanlake-residences"
    });
    await this.createProject({
      title: "Marina Bay Villas",
      slug: "marina-bay-villas",
      description: "Marina Bay Villas l\xE0 d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 ngh\u1EC9 d\u01B0\u1EE1ng v\u1EDBi t\u1EA7m nh\xECn h\u01B0\u1EDBng bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p. D\u1EF1 \xE1n \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF theo phong c\xE1ch ki\u1EBFn tr\xFAc \u0110\u1ECBa Trung H\u1EA3i k\u1EBFt h\u1EE3p v\u1EDBi n\xE9t hi\u1EC7n \u0111\u1EA1i, t\u1EA1o n\xEAn kh\xF4ng gian s\u1ED1ng sang tr\u1ECDng v\xE0 \u0111\u1EB3ng c\u1EA5p. M\u1ED7i c\u0103n bi\u1EC7t th\u1EF1 \u0111\u1EC1u \u0111\u01B0\u1EE3c trang b\u1ECB n\u1ED9i th\u1EA5t cao c\u1EA5p, h\u1EC7 th\u1ED1ng smart home ti\xEAn ti\u1EBFn v\xE0 b\u1EC3 b\u01A1i ri\xEAng.",
      content: "<p>Marina Bay Villas l\xE0 d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 ngh\u1EC9 d\u01B0\u1EE1ng v\u1EDBi t\u1EA7m nh\xECn h\u01B0\u1EDBng bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p. D\u1EF1 \xE1n \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF theo phong c\xE1ch ki\u1EBFn tr\xFAc \u0110\u1ECBa Trung H\u1EA3i k\u1EBFt h\u1EE3p v\u1EDBi n\xE9t hi\u1EC7n \u0111\u1EA1i, t\u1EA1o n\xEAn kh\xF4ng gian s\u1ED1ng sang tr\u1ECDng v\xE0 \u0111\u1EB3ng c\u1EA5p.</p><p>M\u1ED7i c\u0103n bi\u1EC7t th\u1EF1 \u0111\u1EC1u \u0111\u01B0\u1EE3c trang b\u1ECB n\u1ED9i th\u1EA5t cao c\u1EA5p, h\u1EC7 th\u1ED1ng smart home ti\xEAn ti\u1EBFn v\xE0 b\u1EC3 b\u01A1i ri\xEAng. V\u1EDBi di\u1EC7n t\xEDch t\u1EEB 250-400m\xB2, Marina Bay Villas c\xF3 t\u1EEB 3-5 ph\xF2ng ng\u1EE7, ph\xF9 h\u1EE3p cho c\u1EA3 gia \u0111\xECnh v\xE0 l\xE0m n\u01A1i ngh\u1EC9 d\u01B0\u1EE1ng l\xFD t\u01B0\u1EDFng. C\u01B0 d\xE2n t\u1EA1i \u0111\xE2y \u0111\u01B0\u1EE3c th\u1EEBa h\u01B0\u1EDFng h\u1EC7 th\u1ED1ng ti\u1EC7n \xEDch \u0111\u1EB3ng c\u1EA5p nh\u01B0 b\xE3i bi\u1EC3n ri\xEAng, nh\xE0 h\xE0ng, spa, v\xE0 c\xE2u l\u1EA1c b\u1ED9 th\u1EC3 thao bi\u1EC3n.</p>",
      thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bi\u1EC7t th\u1EF1",
      isFeatured: true,
      metaTitle: "Marina Bay Villas | Bi\u1EC7t th\u1EF1 ngh\u1EC9 d\u01B0\u1EE1ng view bi\u1EC3n",
      metaDescription: "Bi\u1EC7t th\u1EF1 view bi\u1EC3n v\u1EDBi thi\u1EBFt k\u1EBF sang tr\u1ECDng, n\u1ED9i th\u1EA5t cao c\u1EA5p c\xF9ng h\u1EC7 th\u1ED1ng ti\u1EC7n \xEDch \u0111\u1EB3ng c\u1EA5p",
      metaKeywords: "bi\u1EC7t th\u1EF1, view bi\u1EC3n, ngh\u1EC9 d\u01B0\u1EE1ng, thi\u1EBFt k\u1EBF sang tr\u1ECDng, ti\u1EC7n \xEDch \u0111\u1EB3ng c\u1EA5p",
      ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      canonicalUrl: "/du-an/marina-bay-villas"
    });
    await this.createProject({
      title: "Sky Oasis Apartments",
      slug: "sky-oasis-apartments",
      description: "Sky Oasis Apartments l\xE0 d\u1EF1 \xE1n c\u0103n h\u1ED9 cao c\u1EA5p n\u1EB1m t\u1EA1i v\u1ECB tr\xED \u0111\u1EAFc \u0111\u1ECBa c\u1EE7a th\xE0nh ph\u1ED1, mang \u0111\u1EBFn t\u1EA7m nh\xECn panorama tuy\u1EC7t \u0111\u1EB9p. T\u1EA5t c\u1EA3 c\xE1c c\u0103n h\u1ED9 \u0111\u1EC1u \u0111\u01B0\u1EE3c trang b\u1ECB h\u1EC7 th\u1ED1ng smart home, s\u1EED d\u1EE5ng v\u1EADt li\u1EC7u cao c\u1EA5p v\xE0 thi\u1EBFt k\u1EBF t\u1ED1i \u01B0u kh\xF4ng gian s\u1ED1ng.",
      content: "<p>Sky Oasis Apartments l\xE0 d\u1EF1 \xE1n c\u0103n h\u1ED9 cao c\u1EA5p n\u1EB1m t\u1EA1i v\u1ECB tr\xED \u0111\u1EAFc \u0111\u1ECBa c\u1EE7a th\xE0nh ph\u1ED1, mang \u0111\u1EBFn t\u1EA7m nh\xECn panorama tuy\u1EC7t \u0111\u1EB9p. T\u1EA5t c\u1EA3 c\xE1c c\u0103n h\u1ED9 \u0111\u1EC1u \u0111\u01B0\u1EE3c trang b\u1ECB h\u1EC7 th\u1ED1ng smart home, s\u1EED d\u1EE5ng v\u1EADt li\u1EC7u cao c\u1EA5p v\xE0 thi\u1EBFt k\u1EBF t\u1ED1i \u01B0u kh\xF4ng gian s\u1ED1ng.</p><p>V\u1EDBi di\u1EC7n t\xEDch \u0111a d\u1EA1ng t\u1EEB 65-120m\xB2, Sky Oasis Apartments c\xF3 c\xE1c lo\u1EA1i c\u0103n h\u1ED9 t\u1EEB 1-3 ph\xF2ng ng\u1EE7, ph\xF9 h\u1EE3p cho c\u1EA3 gia \u0111\xECnh tr\u1EBB v\xE0 ng\u01B0\u1EDDi \u0111\u1ED9c th\xE2n th\xE0nh \u0111\u1EA1t. C\u01B0 d\xE2n t\u1EA1i \u0111\xE2y \u0111\u01B0\u1EE3c th\u1EEBa h\u01B0\u1EDFng h\u1EC7 th\u1ED1ng ti\u1EC7n \xEDch n\u1ED9i khu \u0111\u1EB3ng c\u1EA5p 5 sao nh\u01B0 h\u1ED3 b\u01A1i v\xF4 c\u1EF1c tr\xEAn t\u1EA7ng th\u01B0\u1EE3ng, khu v\u1EF1c BBQ, ph\xF2ng gym, spa, v\xE0 khu vui ch\u01A1i tr\u1EBB em.</p>",
      thumbnailUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "C\u0103n h\u1ED9",
      isFeatured: true,
      metaTitle: "Sky Oasis Apartments | C\u0103n h\u1ED9 cao c\u1EA5p t\u1EA1i trung t\xE2m th\xE0nh ph\u1ED1",
      metaDescription: "C\u0103n h\u1ED9 th\xF4ng minh v\u1EDBi t\u1EA7m nh\xECn panorama, ti\u1EC7n \xEDch n\u1ED9i khu \u0111\u1EB3ng c\u1EA5p 5 sao",
      metaKeywords: "c\u0103n h\u1ED9, c\u0103n h\u1ED9 cao c\u1EA5p, smart home, ti\u1EC7n \xEDch 5 sao, t\u1EA7m nh\xECn panorama",
      ogImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      canonicalUrl: "/du-an/sky-oasis-apartments"
    });
    await this.createNews({
      title: "Khai tr\u01B0\u01A1ng khu bi\u1EC7t th\u1EF1 Swanlake Residences giai \u0111o\u1EA1n 2",
      slug: "khai-truong-swanlake-residences-giai-doan-2",
      summary: "Ecolife ch\xEDnh th\u1EE9c ra m\u1EAFt giai \u0111o\u1EA1n 2 c\u1EE7a d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 Swanlake Residences v\u1EDBi nhi\u1EC1u \u01B0u \u0111\xE3i h\u1EA5p d\u1EABn d\xE0nh cho kh\xE1ch h\xE0ng.",
      content: '<p>Ecolife ch\xEDnh th\u1EE9c ra m\u1EAFt giai \u0111o\u1EA1n 2 c\u1EE7a d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 Swanlake Residences v\u1EDBi nhi\u1EC1u \u01B0u \u0111\xE3i h\u1EA5p d\u1EABn d\xE0nh cho kh\xE1ch h\xE0ng. S\u1EF1 ki\u1EC7n khai tr\u01B0\u01A1ng \u0111\xE3 di\u1EC5n ra th\xE0nh c\xF4ng t\u1ED1t \u0111\u1EB9p v\u1EDBi s\u1EF1 tham gia c\u1EE7a h\u01A1n 300 kh\xE1ch m\u1EDDi, trong \u0111\xF3 c\xF3 nhi\u1EC1u kh\xE1ch h\xE0ng ti\u1EC1m n\u0103ng v\xE0 c\xE1c \u0111\u1ED1i t\xE1c chi\u1EBFn l\u01B0\u1EE3c c\u1EE7a c\xF4ng ty.</p><p>Giai \u0111o\u1EA1n 2 c\u1EE7a Swanlake Residences bao g\u1ED3m 50 c\u0103n bi\u1EC7t th\u1EF1 \u0111\u01A1n l\u1EADp v\u1EDBi thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i v\xE0 sang tr\u1ECDng. M\u1ED7i c\u0103n bi\u1EC7t th\u1EF1 \u0111\u1EC1u c\xF3 view h\u01B0\u1EDBng h\u1ED3 tuy\u1EC7t \u0111\u1EB9p, kh\xF4ng gian s\u1ED1ng r\u1ED9ng r\xE3i v\xE0 tho\xE1ng \u0111\xE3ng. C\xE1c c\u0103n bi\u1EC7t th\u1EF1 \u0111\u01B0\u1EE3c ho\xE0n thi\u1EC7n v\u1EDBi v\u1EADt li\u1EC7u cao c\u1EA5p v\xE0 trang b\u1ECB h\u1EC7 th\u1ED1ng smart home ti\xEAn ti\u1EBFn.</p><p>\u0110\u1EB7c bi\u1EC7t, t\u1EA1i s\u1EF1 ki\u1EC7n khai tr\u01B0\u01A1ng, Ecolife \u0111\xE3 c\xF4ng b\u1ED1 ch\xEDnh s\xE1ch \u01B0u \u0111\xE3i \u0111\u1EB7c bi\u1EC7t d\xE0nh cho kh\xE1ch h\xE0ng \u0111\u1EB7t mua trong th\xE1ng 6 n\xE0y: Chi\u1EBFt kh\u1EA5u l\xEAn \u0111\u1EBFn 5% gi\xE1 tr\u1ECB c\u0103n bi\u1EC7t th\u1EF1, t\u1EB7ng g\xF3i n\u1ED9i th\u1EA5t tr\u1ECB gi\xE1 500 tri\u1EC7u \u0111\u1ED3ng, v\xE0 h\u1ED7 tr\u1EE3 l\xE3i su\u1EA5t 0% trong 2 n\u0103m \u0111\u1EA7u.</p><p>"Ch\xFAng t\xF4i r\u1EA5t t\u1EF1 h\xE0o khi ra m\u1EAFt giai \u0111o\u1EA1n 2 c\u1EE7a d\u1EF1 \xE1n Swanlake Residences. \u0110\xE2y l\xE0 d\u1EF1 \xE1n ti\xEAu bi\u1EC3u cho tri\u1EBFt l\xFD ph\xE1t tri\u1EC3n b\u1EC1n v\u1EEFng v\xE0 h\u01B0\u1EDBng \u0111\u1EBFn ch\u1EA5t l\u01B0\u1EE3ng s\u1ED1ng cao c\u1EA5p m\xE0 Ecolife lu\xF4n theo \u0111u\u1ED5i. Ch\xFAng t\xF4i tin r\u1EB1ng, kh\xF4ng ch\u1EC9 l\xE0 n\u01A1i \u0111\u1EC3 \u1EDF, Swanlake Residences c\xF2n l\xE0 n\u01A1i \u0111\u1EC3 t\u1EADn h\u01B0\u1EDFng cu\u1ED9c s\u1ED1ng, l\xE0 t\xE0i s\u1EA3n gi\xE1 tr\u1ECB \u0111\u1EC3 l\u1EA1i cho c\xE1c th\u1EBF h\u1EC7 sau," \xF4ng Nguy\u1EC5n V\u0103n Minh, T\u1ED5ng Gi\xE1m \u0111\u1ED1c Ecolife chia s\u1EBB.</p><p>Theo k\u1EBF ho\u1EA1ch, c\xE1c c\u0103n bi\u1EC7t th\u1EF1 thu\u1ED9c giai \u0111o\u1EA1n 2 s\u1EBD \u0111\u01B0\u1EE3c b\xE0n giao cho kh\xE1ch h\xE0ng v\xE0o qu\xFD 2 n\u0103m 2024.</p>',
      thumbnailUrl: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      metaTitle: "Khai tr\u01B0\u01A1ng khu bi\u1EC7t th\u1EF1 Swanlake Residences giai \u0111o\u1EA1n 2",
      metaDescription: "Ecolife ch\xEDnh th\u1EE9c ra m\u1EAFt giai \u0111o\u1EA1n 2 c\u1EE7a d\u1EF1 \xE1n bi\u1EC7t th\u1EF1 Swanlake Residences v\u1EDBi nhi\u1EC1u \u01B0u \u0111\xE3i h\u1EA5p d\u1EABn d\xE0nh cho kh\xE1ch h\xE0ng.",
      metaKeywords: "Swanlake Residences, bi\u1EC7t th\u1EF1, khai tr\u01B0\u01A1ng, giai \u0111o\u1EA1n 2, \u01B0u \u0111\xE3i, Ecolife",
      ogImage: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      canonicalUrl: "/tin-tuc/khai-truong-swanlake-residences-giai-doan-2"
    });
    await this.createNews({
      title: 'S\u1EF1 ki\u1EC7n tri \xE2n kh\xE1ch h\xE0ng "Ecolife Luxury Night"',
      slug: "su-kien-tri-an-khach-hang-ecolife-luxury-night",
      summary: "Ch\u01B0\u01A1ng tr\xECnh d\u1EA1 ti\u1EC7c tri \xE2n kh\xE1ch h\xE0ng \u0111\u01B0\u1EE3c t\u1ED5 ch\u1EE9c t\u1EA1i kh\xE1ch s\u1EA1n 5 sao v\u1EDBi s\u1EF1 tham gia c\u1EE7a h\u01A1n 200 kh\xE1ch m\u1EDDi.",
      content: '<p>Ch\u01B0\u01A1ng tr\xECnh d\u1EA1 ti\u1EC7c tri \xE2n kh\xE1ch h\xE0ng "Ecolife Luxury Night" \u0111\xE3 \u0111\u01B0\u1EE3c t\u1ED5 ch\u1EE9c th\xE0nh c\xF4ng t\u1EA1i kh\xE1ch s\u1EA1n 5 sao Intercontinental Hanoi v\xE0o t\u1ED1i ng\xE0y 30/05/2023 v\u1EDBi s\u1EF1 tham gia c\u1EE7a h\u01A1n 200 kh\xE1ch m\u1EDDi l\xE0 kh\xE1ch h\xE0ng th\xE2n thi\u1EBFt v\xE0 \u0111\u1ED1i t\xE1c c\u1EE7a Ecolife.</p><p>S\u1EF1 ki\u1EC7n l\xE0 l\u1EDDi c\u1EA3m \u01A1n ch\xE2n th\xE0nh t\u1EEB Ecolife g\u1EEDi \u0111\u1EBFn nh\u1EEFng kh\xE1ch h\xE0ng \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 l\u1EF1a ch\u1ECDn c\xE1c d\u1EF1 \xE1n c\u1EE7a c\xF4ng ty trong th\u1EDDi gian qua. \u0110\xE2y c\u0169ng l\xE0 d\u1ECBp \u0111\u1EC3 Ecolife chia s\u1EBB v\u1EC1 \u0111\u1ECBnh h\u01B0\u1EDBng ph\xE1t tri\u1EC3n v\xE0 c\xE1c d\u1EF1 \xE1n m\u1EDBi s\u1EAFp ra m\u1EAFt trong th\u1EDDi gian t\u1EDBi.</p><p>Trong khu\xF4n kh\u1ED5 s\u1EF1 ki\u1EC7n, Ecolife \u0111\xE3 t\u1ED5 ch\u1EE9c nhi\u1EC1u ho\u1EA1t \u0111\u1ED9ng th\xFA v\u1ECB nh\u01B0 tr\xECnh di\u1EC5n th\u1EDDi trang, bi\u1EC3u di\u1EC5n \xE2m nh\u1EA1c \u0111\u1EB3ng c\u1EA5p, v\xE0 \u0111\u1EB7c bi\u1EC7t l\xE0 bu\u1ED5i \u0111\u1EA5u gi\xE1 t\u1EEB thi\u1EC7n v\u1EDBi s\u1ED1 ti\u1EC1n thu \u0111\u01B0\u1EE3c s\u1EBD \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 x\xE2y d\u1EF1ng tr\u01B0\u1EDDng h\u1ECDc t\u1EA1i c\xE1c v\xF9ng kh\xF3 kh\u0103n.</p><p>"Th\xE0nh c\xF4ng c\u1EE7a Ecolife ng\xE0y h\xF4m nay c\xF3 \u0111\u01B0\u1EE3c l\xE0 nh\u1EDD s\u1EF1 tin t\u01B0\u1EDFng v\xE0 \u1EE7ng h\u1ED9 c\u1EE7a qu\xFD kh\xE1ch h\xE0ng. Ch\xFAng t\xF4i lu\xF4n tr\xE2n tr\u1ECDng ni\u1EC1m tin \u0111\xF3 v\xE0 cam k\u1EBFt s\u1EBD kh\xF4ng ng\u1EEBng n\u1ED7 l\u1EF1c \u0111\u1EC3 mang \u0111\u1EBFn nh\u1EEFng s\u1EA3n ph\u1EA9m v\xE0 d\u1ECBch v\u1EE5 t\u1ED1t nh\u1EA5t," b\xE0 Nguy\u1EC5n Th\u1ECB Lan, Ph\xF3 T\u1ED5ng Gi\xE1m \u0111\u1ED1c Ecolife ph\xE1t bi\u1EC3u t\u1EA1i s\u1EF1 ki\u1EC7n.</p><p>S\u1EF1 ki\u1EC7n "Ecolife Luxury Night" kh\xF4ng ch\u1EC9 l\xE0 d\u1ECBp \u0111\u1EC3 Ecolife tri \xE2n kh\xE1ch h\xE0ng m\xE0 c\xF2n l\xE0 n\u01A1i g\u1EAFn k\u1EBFt c\u1ED9ng \u0111\u1ED3ng c\u01B0 d\xE2n v\u0103n minh, hi\u1EC7n \u0111\u1EA1i \u0111\xE3 v\xE0 \u0111ang sinh s\u1ED1ng t\u1EA1i c\xE1c d\u1EF1 \xE1n c\u1EE7a Ecolife.</p>',
      thumbnailUrl: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      metaTitle: 'S\u1EF1 ki\u1EC7n tri \xE2n kh\xE1ch h\xE0ng "Ecolife Luxury Night"',
      metaDescription: "Ch\u01B0\u01A1ng tr\xECnh d\u1EA1 ti\u1EC7c tri \xE2n kh\xE1ch h\xE0ng \u0111\u01B0\u1EE3c t\u1ED5 ch\u1EE9c t\u1EA1i kh\xE1ch s\u1EA1n 5 sao v\u1EDBi s\u1EF1 tham gia c\u1EE7a h\u01A1n 200 kh\xE1ch m\u1EDDi.",
      metaKeywords: "Ecolife Luxury Night, tri \xE2n kh\xE1ch h\xE0ng, d\u1EA1 ti\u1EC7c, s\u1EF1 ki\u1EC7n, Intercontinental Hanoi",
      ogImage: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      canonicalUrl: "/tin-tuc/su-kien-tri-an-khach-hang-ecolife-luxury-night"
    });
    await this.createNews({
      title: "Ecolife c\xF4ng b\u1ED1 ch\xEDnh s\xE1ch h\u1ED7 tr\u1EE3 t\xE0i ch\xEDnh m\u1EDBi",
      slug: "ecolife-cong-bo-chinh-sach-ho-tro-tai-chinh-moi",
      summary: "H\u1EE3p t\xE1c c\xF9ng ng\xE2n h\xE0ng VPBank, Ecolife c\xF4ng b\u1ED1 g\xF3i h\u1ED7 tr\u1EE3 t\xE0i ch\xEDnh v\u1EDBi l\xE3i su\u1EA5t \u01B0u \u0111\xE3i ch\u1EC9 6.8%/n\u0103m trong 2 n\u0103m \u0111\u1EA7u.",
      content: '<p>H\u1EE3p t\xE1c c\xF9ng ng\xE2n h\xE0ng VPBank, Ecolife v\u1EEBa c\xF4ng b\u1ED1 g\xF3i h\u1ED7 tr\u1EE3 t\xE0i ch\xEDnh m\u1EDBi v\u1EDBi l\xE3i su\u1EA5t \u01B0u \u0111\xE3i ch\u1EC9 6.8%/n\u0103m trong 2 n\u0103m \u0111\u1EA7u d\xE0nh cho kh\xE1ch h\xE0ng mua b\u1EA5t \u0111\u1ED9ng s\u1EA3n t\u1EA1i c\xE1c d\u1EF1 \xE1n c\u1EE7a c\xF4ng ty.</p><p>Theo \u0111\xF3, kh\xE1ch h\xE0ng c\xF3 th\u1EC3 vay t\u1ED1i \u0111a l\xEAn \u0111\u1EBFn 70% gi\xE1 tr\u1ECB b\u1EA5t \u0111\u1ED9ng s\u1EA3n v\u1EDBi th\u1EDDi h\u1EA1n vay linh ho\u1EA1t t\u1EEB 15 \u0111\u1EBFn 25 n\u0103m. \u0110\u1EB7c bi\u1EC7t, trong 2 n\u0103m \u0111\u1EA7u, l\xE3i su\u1EA5t s\u1EBD \u0111\u01B0\u1EE3c c\u1ED1 \u0111\u1ECBnh \u1EDF m\u1EE9c 6.8%/n\u0103m, sau \u0111\xF3 s\u1EBD \u0111i\u1EC1u ch\u1EC9nh theo th\u1ECB tr\u01B0\u1EDDng nh\u01B0ng kh\xF4ng v\u01B0\u1EE3t qu\xE1 11.5%/n\u0103m.</p><p>B\xEAn c\u1EA1nh \u0111\xF3, Ecolife c\xF2n \xE1p d\u1EE5ng ch\xEDnh s\xE1ch thanh to\xE1n linh ho\u1EA1t, cho ph\xE9p kh\xE1ch h\xE0ng ch\u1EC9 c\u1EA7n thanh to\xE1n 30% gi\xE1 tr\u1ECB b\u1EA5t \u0111\u1ED9ng s\u1EA3n trong giai \u0111o\u1EA1n \u0111\u1EA7u, ph\u1EA7n c\xF2n l\u1EA1i s\u1EBD \u0111\u01B0\u1EE3c thanh to\xE1n theo ti\u1EBFn \u0111\u1ED9 v\u1EDBi s\u1EF1 h\u1ED7 tr\u1EE3 t\u1EEB ng\xE2n h\xE0ng.</p><p>"Ch\xFAng t\xF4i hi\u1EC3u r\u1EB1ng, vi\u1EC7c mua b\u1EA5t \u0111\u1ED9ng s\u1EA3n l\xE0 quy\u1EBFt \u0111\u1ECBnh t\xE0i ch\xEDnh l\u1EDBn c\u1EE7a m\u1ED7i gia \u0111\xECnh. V\xEC v\u1EADy, th\xF4ng qua vi\u1EC7c h\u1EE3p t\xE1c v\u1EDBi c\xE1c \u0111\u1ED1i t\xE1c ng\xE2n h\xE0ng uy t\xEDn, Ecolife mong mu\u1ED1n gi\u1EA3m b\u1EDBt g\xE1nh n\u1EB7ng t\xE0i ch\xEDnh cho kh\xE1ch h\xE0ng, gi\xFAp h\u1ECD d\u1EC5 d\xE0ng s\u1EDF h\u1EEFu ng\xF4i nh\xE0 m\u01A1 \u01B0\u1EDBc," \xF4ng Tr\u1EA7n V\u0103n H\xF9ng, Gi\xE1m \u0111\u1ED1c T\xE0i ch\xEDnh c\u1EE7a Ecolife chia s\u1EBB.</p><p>Ch\xEDnh s\xE1ch h\u1ED7 tr\u1EE3 t\xE0i ch\xEDnh m\u1EDBi n\xE0y s\u1EBD \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng cho t\u1EA5t c\u1EA3 c\xE1c d\u1EF1 \xE1n \u0111ang m\u1EDF b\xE1n c\u1EE7a Ecolife, bao g\u1ED3m Swanlake Residences, Marina Bay Villas v\xE0 Sky Oasis Apartments.</p>',
      thumbnailUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      metaTitle: "Ecolife c\xF4ng b\u1ED1 ch\xEDnh s\xE1ch h\u1ED7 tr\u1EE3 t\xE0i ch\xEDnh m\u1EDBi",
      metaDescription: "H\u1EE3p t\xE1c c\xF9ng ng\xE2n h\xE0ng VPBank, Ecolife c\xF4ng b\u1ED1 g\xF3i h\u1ED7 tr\u1EE3 t\xE0i ch\xEDnh v\u1EDBi l\xE3i su\u1EA5t \u01B0u \u0111\xE3i ch\u1EC9 6.8%/n\u0103m trong 2 n\u0103m \u0111\u1EA7u.",
      metaKeywords: "Ecolife, ch\xEDnh s\xE1ch t\xE0i ch\xEDnh, h\u1ED7 tr\u1EE3 vay, VPBank, b\u1EA5t \u0111\u1ED9ng s\u1EA3n, l\xE3i su\u1EA5t \u01B0u \u0111\xE3i",
      ogImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      canonicalUrl: "/tin-tuc/ecolife-cong-bo-chinh-sach-ho-tro-tai-chinh-moi"
    });
    await this.createAmenity({
      title: "C\xF4ng vi\xEAn xanh",
      description: "H\u1EC7 th\u1ED1ng c\xF4ng vi\xEAn r\u1ED9ng l\u1EDBn v\u1EDBi c\u1EA3nh quan \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF tinh t\u1EBF, mang \u0111\u1EBFn kh\xF4ng gian th\u01B0 gi\xE3n l\xFD t\u01B0\u1EDFng.",
      icon: "tree"
    });
    await this.createAmenity({
      title: "H\u1ED3 b\u01A1i v\xF4 c\u1EF1c",
      description: "H\u1ED3 b\u01A1i v\xF4 c\u1EF1c v\u1EDBi t\u1EA7m nh\xECn panorama, \u0111\u1EA1t chu\u1EA9n Olympic c\xF9ng h\u1EC7 th\u1ED1ng l\xE0m s\u1EA1ch n\u01B0\u1EDBc hi\u1EC7n \u0111\u1EA1i.",
      icon: "swimming-pool"
    });
    await this.createAmenity({
      title: "Fitness Center",
      description: "Trung t\xE2m th\u1EC3 d\u1EE5c th\u1EC3 thao hi\u1EC7n \u0111\u1EA1i v\u1EDBi \u0111\u1EA7y \u0111\u1EE7 trang thi\u1EBFt b\u1ECB v\xE0 hu\u1EA5n luy\u1EC7n vi\xEAn chuy\xEAn nghi\u1EC7p.",
      icon: "dumbbell"
    });
    await this.createAmenity({
      title: "Nh\xE0 h\xE0ng & Caf\xE9",
      description: "Chu\u1ED7i nh\xE0 h\xE0ng v\xE0 caf\xE9 cao c\u1EA5p ph\u1EE5c v\u1EE5 \u1EA9m th\u1EF1c \u0111a d\u1EA1ng t\u1EEB \xC1 \u0111\u1EBFn \xC2u, \u0111\xE1p \u1EE9ng m\u1ECDi nhu c\u1EA7u.",
      icon: "utensils"
    });
    await this.updateSiteSettings({
      logoUrl: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      siteName: "Ecolife",
      contactEmail: "info@ecolife.vn",
      contactPhone: "0912345678",
      address: "S\u1ED1 1 \u0110\u01B0\u1EDDng Tr\u1EA7n Duy H\u01B0ng, H\xE0 N\u1ED9i",
      facebookUrl: "https://facebook.com/ecolife",
      youtubeUrl: "https://youtube.com/ecolife",
      zaloUrl: "https://zalo.me/ecolife",
      // Thông tin văn phòng cho footer
      officeAddress: "T\xF2a nh\xE0 Hanoi Lake View",
      officeDistrict: "28 \u0110\u01B0\u1EDDng Thanh Ni\xEAn, T\xE2y H\u1ED3",
      officeCity: "H\xE0 N\u1ED9i",
      officePhone: "+84 24 3936 3940",
      officePhone2: "+84 24 3 678 6316",
      officeEmail: "info@ecolife.vn",
      // Thông tin Google Map
      googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265586948147!2d105.81684797556554!3d21.04587828062324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zMjggxJDGsOG7nW5nIFRoYW5oIE5pw6puLCBUw6J5IEjhu5MsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1712123456789!5m2!1svi!2s",
      googleMapLat: "21.045878",
      googleMapLng: "105.816848",
      googleMapZoom: "15"
    });
    await this.createMenu({
      title: "Trang ch\u1EE7",
      url: "/",
      order: 1,
      isActive: true
    });
    const duAnMenu = await this.createMenu({
      title: "D\u1EF1 \xE1n",
      url: "/du-an",
      order: 2,
      isActive: true
    });
    await this.createMenu({
      title: "C\u0103n h\u1ED9",
      url: "/du-an/can-ho",
      order: 1,
      parentId: duAnMenu.id,
      isActive: true
    });
    await this.createMenu({
      title: "Shophouse",
      url: "/du-an/shophouse",
      order: 2,
      parentId: duAnMenu.id,
      isActive: true
    });
    await this.createMenu({
      title: "Nh\xE0 v\u01B0\u1EDDn",
      url: "/du-an/nha-vuon",
      order: 3,
      parentId: duAnMenu.id,
      isActive: true
    });
    await this.createMenu({
      title: "Bi\u1EC7t th\u1EF1",
      url: "/du-an/biet-thu",
      order: 4,
      parentId: duAnMenu.id,
      isActive: true
    });
    await this.createMenu({
      title: "NOXH",
      url: "/du-an/noxh",
      order: 5,
      parentId: duAnMenu.id,
      isActive: true
    });
    const viTriMenu = await this.createMenu({
      title: "V\u1ECA TR\xCD",
      url: "/vi-tri",
      order: 3,
      isActive: true,
      showOnHomepage: true,
      homeImage: "https://images.unsplash.com/photo-1624480474543-08ec6db981d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      homeTitle: "V\u1ECA TR\xCD \u0110\u1EAEC \u0110\u1ECAA",
      homeDescription: "T\u1ECDa l\u1EA1c t\u1EA1i v\u1ECB tr\xED \u0111\u1EAFc \u0111\u1ECBa, k\u1EBFt n\u1ED1i thu\u1EADn ti\u1EC7n v\u1EDBi c\xE1c trung t\xE2m th\u01B0\u01A1ng m\u1EA1i, gi\xE1o d\u1EE5c v\xE0 y t\u1EBF",
      homeContent: "<p>Ecolife t\u1ECDa l\u1EA1c t\u1EA1i v\u1ECB tr\xED \u0111\u1EAFc \u0111\u1ECBa, n\u1EB1m \u1EDF trung t\xE2m c\u1EE7a th\xE0nh ph\u1ED1 v\u1EDBi kh\u1EA3 n\u0103ng k\u1EBFt n\u1ED1i thu\u1EADn ti\u1EC7n \u0111\u1EBFn c\xE1c khu v\u1EF1c quan tr\u1ECDng.</p><p>T\u1EEB d\u1EF1 \xE1n, c\u01B0 d\xE2n ch\u1EC9 m\u1EA5t:</p><ul><li>5 ph\xFAt \u0111\u1EBFn Trung t\xE2m th\u01B0\u01A1ng m\u1EA1i Aeon Mall</li><li>10 ph\xFAt \u0111\u1EBFn C\xF4ng vi\xEAn Y\xEAn S\u1EDF</li><li>15 ph\xFAt \u0111\u1EBFn trung t\xE2m th\xE0nh ph\u1ED1</li><li>20 ph\xFAt \u0111\u1EBFn s\xE2n bay N\u1ED9i B\xE0i</li></ul><p>\u0110\xE2y l\xE0 v\u1ECB tr\xED l\xFD t\u01B0\u1EDFng cho nh\u1EEFng ai mu\u1ED1n t\u1EADn h\u01B0\u1EDFng kh\xF4ng gian s\u1ED1ng y\xEAn t\u0129nh nh\u01B0ng v\u1EABn d\u1EC5 d\xE0ng k\u1EBFt n\u1ED1i v\u1EDBi nh\u1ECBp s\u1ED1ng n\u0103ng \u0111\u1ED9ng c\u1EE7a \u0111\xF4 th\u1ECB.</p>"
    });
    await this.createMenu({
      title: "V\u1ECB tr\xED t\u1ED5ng quan",
      url: "/vi-tri/tong-quan",
      order: 1,
      isActive: true,
      parentId: viTriMenu.id
    });
    await this.createMenu({
      title: "B\u1EA3n \u0111\u1ED3 v\u1EC7 tinh",
      url: "/vi-tri/ban-do-ve-tinh",
      order: 2,
      isActive: true,
      parentId: viTriMenu.id
    });
    await this.createMenu({
      title: "Tin t\u1EE9c",
      url: "/tin-tuc",
      order: 4,
      isActive: true
    });
    await this.createMenu({
      title: "Ti\u1EC7n \xEDch",
      url: "/tien-ich",
      order: 5,
      isActive: true,
      showOnHomepage: true,
      homeImage: "https://images.unsplash.com/photo-1624206386316-846a61f55500?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      homeTitle: "TI\u1EC6N \xCDCH \u0110A D\u1EA0NG",
      homeDescription: "H\u1EC7 th\u1ED1ng ti\u1EC7n \xEDch \u0111\u1EB3ng c\u1EA5p 5 sao ph\u1EE5c v\u1EE5 m\u1ECDi nhu c\u1EA7u sinh ho\u1EA1t, gi\u1EA3i tr\xED v\xE0 th\u01B0 gi\xE3n",
      homeContent: "<p>Ecolife cung c\u1EA5p h\u1EC7 th\u1ED1ng ti\u1EC7n \xEDch \u0111a d\u1EA1ng v\xE0 \u0111\u1EB3ng c\u1EA5p, t\u1EA1o n\xEAn kh\xF4ng gian s\u1ED1ng ho\xE0n h\u1EA3o cho c\u01B0 d\xE2n:</p><ul><li>C\xF4ng vi\xEAn xanh v\u1EDBi kh\xF4ng gian th\u01B0 gi\xE3n v\xE0 t\u1EADp luy\u1EC7n</li><li>H\u1ED3 b\u01A1i v\xF4 c\u1EF1c v\u1EDBi t\u1EA7m nh\xECn panorama</li><li>Trung t\xE2m th\u1EC3 thao hi\u1EC7n \u0111\u1EA1i v\u1EDBi ph\xF2ng gym v\xE0 yoga</li><li>Khu vui ch\u01A1i tr\u1EBB em an to\xE0n v\xE0 s\xE1ng t\u1EA1o</li><li>H\u1EC7 th\u1ED1ng nh\xE0 h\xE0ng v\xE0 caf\xE9 sang tr\u1ECDng</li></ul><p>M\u1ECDi ti\u1EC7n \xEDch \u0111\u1EC1u \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF v\xE0 v\u1EADn h\xE0nh theo ti\xEAu chu\u1EA9n 5 sao, \u0111\u1EA3m b\u1EA3o tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t cho c\u01B0 d\xE2n.</p>"
    });
    await this.createMenu({
      title: "Li\xEAn h\u1EC7",
      url: "/lien-he",
      order: 6,
      isActive: true
    });
  }
};
var storage = new MemStorage();

// server/services/email.ts
import nodemailer from "nodemailer";

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/services/email.ts
var transporter = null;
var initializeEmailService = (host, port, secure, user, pass) => {
  try {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass
      }
    });
    log("Email service \u0111\xE3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o", "email");
    return true;
  } catch (error) {
    log(`Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o email service: ${error}`, "email");
    return false;
  }
};
var isEmailServiceConfigured = () => {
  return transporter !== null;
};
var sendNewContactNotification = async (contact, recipientEmail) => {
  if (!transporter) {
    log("Email service ch\u01B0a \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o", "email");
    return false;
  }
  try {
    const { name, email, phone, message, project } = contact;
    const senderInfo = transporter.options?.auth?.user || "no-reply@example.com";
    const mailOptions = {
      from: `"H\u1EC7 th\u1ED1ng B\u1EA5t \u0111\u1ED9ng s\u1EA3n" <${senderInfo}>`,
      to: recipientEmail,
      subject: `[Li\xEAn h\u1EC7 m\u1EDBi] t\u1EEB ${name}`,
      html: `
        <h2>Th\xF4ng tin li\xEAn h\u1EC7 m\u1EDBi</h2>
        <p>B\u1EA1n v\u1EEBa nh\u1EADn \u0111\u01B0\u1EE3c th\xF4ng tin li\xEAn h\u1EC7 m\u1EDBi t\u1EEB website:</p>
        
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; width: 150px;"><strong>T\xEAn:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              <a href="tel:${phone}">${phone}</a>
            </td>
          </tr>
          ${project ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>D\u1EF1 \xE1n quan t\xE2m:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${project}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>N\u1ED9i dung:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-line;">${message}</td>
          </tr>
        </table>
        
        <p style="margin-top: 20px;">
          <a href="${process.env.WEBSITE_URL || ""}/admin/contacts" style="background-color: #4CAF50; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px;">
            Xem trong trang qu\u1EA3n tr\u1ECB
          </a>
        </p>
        
        <p style="color: #888; font-size: 12px; margin-top: 30px;">
          Email n\xE0y \u0111\u01B0\u1EE3c g\u1EEDi t\u1EF1 \u0111\u1ED9ng t\u1EEB h\u1EC7 th\u1ED1ng website b\u1EA5t \u0111\u1ED9ng s\u1EA3n. Vui l\xF2ng kh\xF4ng tr\u1EA3 l\u1EDDi tr\u1EF1c ti\u1EBFp email n\xE0y.
        </p>
      `
    };
    await transporter.sendMail(mailOptions);
    log(`\u0110\xE3 g\u1EEDi email th\xF4ng b\xE1o li\xEAn h\u1EC7 m\u1EDBi \u0111\u1EBFn ${recipientEmail}`, "email");
    return true;
  } catch (error) {
    log(`L\u1ED7i khi g\u1EEDi email th\xF4ng b\xE1o: ${error}`, "email");
    return false;
  }
};
var sendContactReply = async (contact, replyMessage, senderName = "Ban Qu\u1EA3n L\xFD D\u1EF1 \xC1n") => {
  if (!transporter) {
    log("Email service ch\u01B0a \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o", "email");
    return false;
  }
  try {
    const { name, email } = contact;
    const senderInfo = transporter.options?.auth?.user || "no-reply@example.com";
    const mailOptions = {
      from: `"${senderName}" <${senderInfo}>`,
      to: email,
      subject: `Ph\u1EA3n h\u1ED3i th\xF4ng tin li\xEAn h\u1EC7 c\u1EE7a b\u1EA1n`,
      html: `
        <h2>Xin ch\xE0o ${name},</h2>
        
        <p>C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i. D\u01B0\u1EDBi \u0111\xE2y l\xE0 ph\u1EA3n h\u1ED3i cho th\xF4ng tin c\u1EE7a b\u1EA1n:</p>
        
        <div style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #4CAF50; margin: 20px 0;">
          <p style="white-space: pre-line;">${replyMessage}</p>
        </div>
        
        <p>N\u1EBFu b\u1EA1n c\xF3 b\u1EA5t k\u1EF3 c\xE2u h\u1ECFi n\xE0o kh\xE1c, vui l\xF2ng li\xEAn h\u1EC7 l\u1EA1i v\u1EDBi ch\xFAng t\xF4i.</p>
        
        <p>Tr\xE2n tr\u1ECDng,<br>${senderName}</p>
        
        <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px;">
          Email n\xE0y \u0111\u01B0\u1EE3c g\u1EEDi t\u1EEB h\u1EC7 th\u1ED1ng website b\u1EA5t \u0111\u1ED9ng s\u1EA3n. N\u1EBFu b\u1EA1n mu\u1ED1n li\xEAn h\u1EC7 tr\u1EF1c ti\u1EBFp, vui l\xF2ng g\u1ECDi s\u1ED1 hotline c\u1EE7a ch\xFAng t\xF4i.
        </p>
      `
    };
    await transporter.sendMail(mailOptions);
    log(`\u0110\xE3 g\u1EEDi email ph\u1EA3n h\u1ED3i \u0111\u1EBFn ${email}`, "email");
    return true;
  } catch (error) {
    log(`L\u1ED7i khi g\u1EEDi email ph\u1EA3n h\u1ED3i: ${error}`, "email");
    return false;
  }
};

// server/services/email-config.ts
var DEFAULT_EMAIL_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // true for 465, false for other ports
  user: "",
  pass: "",
  notificationEmail: "",
  isConfigured: false
};
var currentConfig = { ...DEFAULT_EMAIL_CONFIG };
var updateEmailConfigFromEnv = () => {
  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_SECURE,
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_NOTIFICATION_ADDRESS
  } = process.env;
  if (EMAIL_HOST && EMAIL_USER && EMAIL_PASS) {
    const port = EMAIL_PORT ? parseInt(EMAIL_PORT, 10) : 587;
    const secure = EMAIL_SECURE === "true";
    currentConfig = {
      host: EMAIL_HOST,
      port,
      secure,
      user: EMAIL_USER,
      pass: EMAIL_PASS,
      notificationEmail: EMAIL_NOTIFICATION_ADDRESS || EMAIL_USER,
      isConfigured: true
    };
    const initialized = initializeEmailService(
      currentConfig.host,
      currentConfig.port,
      currentConfig.secure,
      currentConfig.user,
      currentConfig.pass
    );
    if (initialized) {
      log(`Email service \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EA5u h\xECnh v\u1EDBi ${currentConfig.user}`, "email-config");
    }
    return initialized;
  }
  return false;
};
var updateEmailConfigFromSettings = (settings) => {
  const { contactEmail, officeEmail } = settings;
  if (currentConfig.isConfigured && (contactEmail || officeEmail)) {
    currentConfig.notificationEmail = contactEmail || officeEmail || currentConfig.user;
    log(`\u0110\xE3 c\u1EADp nh\u1EADt email th\xF4ng b\xE1o th\xE0nh: ${currentConfig.notificationEmail}`, "email-config");
    return true;
  }
  return false;
};
var getNotificationEmail = () => {
  return currentConfig.notificationEmail || currentConfig.user;
};
var isEmailAvailable = () => {
  return currentConfig.isConfigured && isEmailServiceConfigured();
};
var getEmailConfigForAdmin = () => {
  return {
    host: currentConfig.host,
    port: currentConfig.port,
    secure: currentConfig.secure,
    user: currentConfig.user,
    notificationEmail: currentConfig.notificationEmail,
    isConfigured: currentConfig.isConfigured,
    isServiceRunning: isEmailServiceConfigured()
  };
};

// server/routes.ts
var authenticate = (req, res, next) => {
  const isAuthenticated = req.headers.authorization === "Bearer admin-token";
  if (!isAuthenticated) {
    return res.status(401).json({ message: "Kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp" });
  }
  next();
};
async function registerRoutes(app2) {
  const API_PREFIX = "/api";
  updateEmailConfigFromEnv();
  app2.post(`${API_PREFIX}/auth/login`, async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin" });
      }
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "T\xEAn \u0111\u0103ng nh\u1EADp ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng" });
      }
      const isMatch = password === user.password;
      if (!isMatch) {
        return res.status(401).json({ message: "T\xEAn \u0111\u0103ng nh\u1EADp ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng" });
      }
      res.json({
        message: "\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng",
        user: { id: user.id, username: user.username },
        token: "admin-token"
        // Demo only
      });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i \u0111\u0103ng nh\u1EADp" });
    }
  });
  app2.post(`${API_PREFIX}/auth/logout`, (req, res) => {
    res.json({ message: "\u0110\u0103ng xu\u1EA5t th\xE0nh c\xF4ng" });
  });
  app2.get(`${API_PREFIX}/auth/me`, authenticate, async (req, res) => {
    res.json({ id: 1, username: "admin" });
  });
  app2.get(`${API_PREFIX}/projects`, async (req, res) => {
    try {
      const projects2 = await storage.getAllProjects();
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch d\u1EF1 \xE1n" });
    }
  });
  app2.get(`${API_PREFIX}/projects/:slug`, async (req, res) => {
    try {
      const { slug } = req.params;
      const project = await storage.getProjectBySlug(slug);
      if (!project) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y d\u1EF1 \xE1n" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y chi ti\u1EBFt d\u1EF1 \xE1n" });
    }
  });
  app2.post(`${API_PREFIX}/projects`, authenticate, async (req, res) => {
    try {
      const projectData = insertProjectSchema.safeParse(req.body);
      if (!projectData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: projectData.error.errors
        });
      }
      const project = await storage.createProject(projectData.data);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi t\u1EA1o d\u1EF1 \xE1n" });
    }
  });
  app2.put(`${API_PREFIX}/projects/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const projectId = parseInt(id);
      if (isNaN(projectId)) {
        return res.status(400).json({ message: "ID d\u1EF1 \xE1n kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const projectData = insertProjectSchema.partial().safeParse(req.body);
      if (!projectData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: projectData.error.errors
        });
      }
      const updatedProject = await storage.updateProject(projectId, projectData.data);
      if (!updatedProject) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y d\u1EF1 \xE1n" });
      }
      res.json(updatedProject);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt d\u1EF1 \xE1n" });
    }
  });
  app2.delete(`${API_PREFIX}/projects/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const projectId = parseInt(id);
      if (isNaN(projectId)) {
        return res.status(400).json({ message: "ID d\u1EF1 \xE1n kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const success = await storage.deleteProject(projectId);
      if (!success) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y d\u1EF1 \xE1n" });
      }
      res.json({ message: "\u0110\xE3 x\xF3a d\u1EF1 \xE1n th\xE0nh c\xF4ng" });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi x\xF3a d\u1EF1 \xE1n" });
    }
  });
  app2.get(`${API_PREFIX}/news`, async (req, res) => {
    try {
      const news2 = await storage.getAllNews();
      res.json(news2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch tin t\u1EE9c" });
    }
  });
  app2.get(`${API_PREFIX}/news/:slug`, async (req, res) => {
    try {
      const { slug } = req.params;
      const newsItem = await storage.getNewsBySlug(slug);
      if (!newsItem) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y tin t\u1EE9c" });
      }
      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y chi ti\u1EBFt tin t\u1EE9c" });
    }
  });
  app2.post(`${API_PREFIX}/news`, authenticate, async (req, res) => {
    try {
      const newsData = insertNewsSchema.safeParse(req.body);
      if (!newsData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: newsData.error.errors
        });
      }
      const news2 = await storage.createNews(newsData.data);
      res.status(201).json(news2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi t\u1EA1o tin t\u1EE9c" });
    }
  });
  app2.put(`${API_PREFIX}/news/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const newsId = parseInt(id);
      if (isNaN(newsId)) {
        return res.status(400).json({ message: "ID tin t\u1EE9c kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const newsData = insertNewsSchema.partial().safeParse(req.body);
      if (!newsData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: newsData.error.errors
        });
      }
      const updatedNews = await storage.updateNews(newsId, newsData.data);
      if (!updatedNews) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y tin t\u1EE9c" });
      }
      res.json(updatedNews);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt tin t\u1EE9c" });
    }
  });
  app2.delete(`${API_PREFIX}/news/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const newsId = parseInt(id);
      if (isNaN(newsId)) {
        return res.status(400).json({ message: "ID tin t\u1EE9c kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const success = await storage.deleteNews(newsId);
      if (!success) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y tin t\u1EE9c" });
      }
      res.json({ message: "\u0110\xE3 x\xF3a tin t\u1EE9c th\xE0nh c\xF4ng" });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi x\xF3a tin t\u1EE9c" });
    }
  });
  app2.get(`${API_PREFIX}/slides`, async (req, res) => {
    try {
      const slides2 = await storage.getAllSlides();
      res.json(slides2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch slides" });
    }
  });
  app2.post(`${API_PREFIX}/slides`, authenticate, async (req, res) => {
    try {
      const slideData = insertSlideSchema.safeParse(req.body);
      if (!slideData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: slideData.error.errors
        });
      }
      const slide = await storage.createSlide(slideData.data);
      res.status(201).json(slide);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi t\u1EA1o slide" });
    }
  });
  app2.put(`${API_PREFIX}/slides/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const slideId = parseInt(id);
      if (isNaN(slideId)) {
        return res.status(400).json({ message: "ID slide kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const processedData = Object.fromEntries(
        Object.entries(req.body).map(([key, value]) => [key, value === "" ? null : value])
      );
      const slideData = insertSlideSchema.partial().safeParse(processedData);
      if (!slideData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: slideData.error.errors
        });
      }
      const updatedSlide = await storage.updateSlide(slideId, slideData.data);
      if (!updatedSlide) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y slide" });
      }
      res.json(updatedSlide);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt slide" });
    }
  });
  app2.delete(`${API_PREFIX}/slides/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const slideId = parseInt(id);
      if (isNaN(slideId)) {
        return res.status(400).json({ message: "ID slide kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const success = await storage.deleteSlide(slideId);
      if (!success) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y slide" });
      }
      res.json({ message: "\u0110\xE3 x\xF3a slide th\xE0nh c\xF4ng" });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi x\xF3a slide" });
    }
  });
  app2.get(`${API_PREFIX}/amenities`, async (req, res) => {
    try {
      const amenities2 = await storage.getAllAmenities();
      res.json(amenities2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch ti\u1EC7n \xEDch" });
    }
  });
  app2.post(`${API_PREFIX}/amenities`, authenticate, async (req, res) => {
    try {
      const amenityData = insertAmenitySchema.safeParse(req.body);
      if (!amenityData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: amenityData.error.errors
        });
      }
      const amenity = await storage.createAmenity(amenityData.data);
      res.status(201).json(amenity);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi t\u1EA1o ti\u1EC7n \xEDch" });
    }
  });
  app2.put(`${API_PREFIX}/amenities/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const amenityId = parseInt(id);
      if (isNaN(amenityId)) {
        return res.status(400).json({ message: "ID ti\u1EC7n \xEDch kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const amenityData = insertAmenitySchema.partial().safeParse(req.body);
      if (!amenityData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: amenityData.error.errors
        });
      }
      const updatedAmenity = await storage.updateAmenity(amenityId, amenityData.data);
      if (!updatedAmenity) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y ti\u1EC7n \xEDch" });
      }
      res.json(updatedAmenity);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt ti\u1EC7n \xEDch" });
    }
  });
  app2.delete(`${API_PREFIX}/amenities/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const amenityId = parseInt(id);
      if (isNaN(amenityId)) {
        return res.status(400).json({ message: "ID ti\u1EC7n \xEDch kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const success = await storage.deleteAmenity(amenityId);
      if (!success) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y ti\u1EC7n \xEDch" });
      }
      res.json({ message: "\u0110\xE3 x\xF3a ti\u1EC7n \xEDch th\xE0nh c\xF4ng" });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi x\xF3a ti\u1EC7n \xEDch" });
    }
  });
  app2.post(`${API_PREFIX}/contacts`, async (req, res) => {
    try {
      const contactData = insertContactSchema.safeParse(req.body);
      if (!contactData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: contactData.error.errors
        });
      }
      const contact = await storage.createContact(contactData.data);
      if (isEmailAvailable()) {
        try {
          const notificationEmail = getNotificationEmail();
          await sendNewContactNotification(contact, notificationEmail);
          console.log(`\u0110\xE3 g\u1EEDi th\xF4ng b\xE1o email \u0111\u1EBFn ${notificationEmail}`);
        } catch (emailError) {
          console.error(`Kh\xF4ng th\u1EC3 g\u1EEDi email th\xF4ng b\xE1o: ${emailError}`);
        }
      }
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi g\u1EEDi li\xEAn h\u1EC7" });
    }
  });
  app2.get(`${API_PREFIX}/contacts`, authenticate, async (req, res) => {
    try {
      const contacts2 = await storage.getAllContacts();
      res.json(contacts2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch li\xEAn h\u1EC7" });
    }
  });
  app2.post(`${API_PREFIX}/contacts/:id/reply`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const contactId = parseInt(id);
      if (isNaN(contactId)) {
        return res.status(400).json({ message: "ID li\xEAn h\u1EC7 kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const contact = await storage.getContactById(contactId);
      if (!contact) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y li\xEAn h\u1EC7" });
      }
      const { message, senderName } = req.body;
      if (!message) {
        return res.status(400).json({ message: "Vui l\xF2ng nh\u1EADp n\u1ED9i dung ph\u1EA3n h\u1ED3i" });
      }
      if (isEmailAvailable()) {
        try {
          const success = await sendContactReply(
            contact,
            message,
            senderName || "Ban Qu\u1EA3n L\xFD D\u1EF1 \xC1n"
          );
          if (success) {
            return res.json({
              success: true,
              message: "\u0110\xE3 g\u1EEDi ph\u1EA3n h\u1ED3i th\xE0nh c\xF4ng \u0111\u1EBFn " + contact.email
            });
          } else {
            return res.status(500).json({
              success: false,
              message: "Kh\xF4ng th\u1EC3 g\u1EEDi email ph\u1EA3n h\u1ED3i. Vui l\xF2ng ki\u1EC3m tra c\u1EA5u h\xECnh email."
            });
          }
        } catch (emailError) {
          console.error(`L\u1ED7i khi g\u1EEDi email ph\u1EA3n h\u1ED3i: ${emailError}`);
          return res.status(500).json({
            success: false,
            message: "\u0110\xE3 x\u1EA3y ra l\u1ED7i khi g\u1EEDi email ph\u1EA3n h\u1ED3i."
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "D\u1ECBch v\u1EE5 email ch\u01B0a \u0111\u01B0\u1EE3c c\u1EA5u h\xECnh. Vui l\xF2ng c\u1EA5u h\xECnh email trong ph\u1EA7n c\xE0i \u0111\u1EB7t trang."
        });
      }
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi g\u1EEDi ph\u1EA3n h\u1ED3i" });
    }
  });
  app2.delete(`${API_PREFIX}/contacts/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const contactId = parseInt(id);
      if (isNaN(contactId)) {
        return res.status(400).json({ message: "ID li\xEAn h\u1EC7 kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const success = await storage.deleteContact(contactId);
      if (!success) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y li\xEAn h\u1EC7" });
      }
      res.json({ message: "\u0110\xE3 x\xF3a li\xEAn h\u1EC7 th\xE0nh c\xF4ng" });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi x\xF3a li\xEAn h\u1EC7" });
    }
  });
  app2.get(`${API_PREFIX}/email-status`, authenticate, async (req, res) => {
    try {
      const status = {
        isConfigured: isEmailAvailable(),
        config: getEmailConfigForAdmin()
      };
      res.json(status);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi ki\u1EC3m tra tr\u1EA1ng th\xE1i email" });
    }
  });
  app2.get(`${API_PREFIX}/site-settings`, async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      if (!settings) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y c\xE0i \u0111\u1EB7t trang web" });
      }
      res.json(settings);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y c\xE0i \u0111\u1EB7t trang web" });
    }
  });
  app2.put(`${API_PREFIX}/site-settings`, authenticate, async (req, res) => {
    try {
      const settingsData = insertSiteSettingsSchema.partial().safeParse(req.body);
      if (!settingsData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: settingsData.error.errors
        });
      }
      const updatedSettings = await storage.updateSiteSettings(settingsData.data);
      if (!updatedSettings) {
        return res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt c\xE0i \u0111\u1EB7t trang web" });
      }
      updateEmailConfigFromSettings(updatedSettings);
      res.json(updatedSettings);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt c\xE0i \u0111\u1EB7t trang web" });
    }
  });
  app2.get(`${API_PREFIX}/menus`, async (req, res) => {
    try {
      const menus2 = await storage.getAllMenus();
      res.json(menus2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch menu" });
    }
  });
  app2.get(`${API_PREFIX}/menus/active`, async (req, res) => {
    try {
      const menus2 = await storage.getActiveMenus();
      res.json(menus2);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y danh s\xE1ch menu \u0111ang ho\u1EA1t \u0111\u1ED9ng" });
    }
  });
  app2.get(`${API_PREFIX}/menus/:id`, async (req, res) => {
    try {
      const { id } = req.params;
      const menuId = parseInt(id);
      if (isNaN(menuId)) {
        return res.status(400).json({ message: "ID menu kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const menu = await storage.getMenuById(menuId);
      if (!menu) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y menu" });
      }
      res.json(menu);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi l\u1EA5y chi ti\u1EBFt menu" });
    }
  });
  app2.post(`${API_PREFIX}/menus`, authenticate, async (req, res) => {
    try {
      const menuData = insertMenuSchema.safeParse(req.body);
      if (!menuData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: menuData.error.errors
        });
      }
      const menu = await storage.createMenu(menuData.data);
      res.status(201).json(menu);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi t\u1EA1o menu" });
    }
  });
  app2.put(`${API_PREFIX}/menus/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const menuId = parseInt(id);
      if (isNaN(menuId)) {
        return res.status(400).json({ message: "ID menu kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const menuData = insertMenuSchema.partial().safeParse(req.body);
      if (!menuData.success) {
        return res.status(400).json({
          message: "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7",
          errors: menuData.error.errors
        });
      }
      const updatedMenu = await storage.updateMenu(menuId, menuData.data);
      if (!updatedMenu) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y menu" });
      }
      res.json(updatedMenu);
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi c\u1EADp nh\u1EADt menu" });
    }
  });
  app2.delete(`${API_PREFIX}/menus/:id`, authenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const menuId = parseInt(id);
      if (isNaN(menuId)) {
        return res.status(400).json({ message: "ID menu kh\xF4ng h\u1EE3p l\u1EC7" });
      }
      const success = await storage.deleteMenu(menuId);
      if (!success) {
        return res.status(404).json({ message: "Kh\xF4ng t\xECm th\u1EA5y menu" });
      }
      res.json({ message: "\u0110\xE3 x\xF3a menu th\xE0nh c\xF4ng" });
    } catch (error) {
      res.status(500).json({ message: "L\u1ED7i khi x\xF3a menu" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  log("S\u1EED d\u1EE5ng l\u01B0u tr\u1EEF trong b\u1ED9 nh\u1EDB (MemStorage)", "server");
  global.storage = storage;
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
