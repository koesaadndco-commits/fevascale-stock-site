-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT,
    "no" INTEGER,
    "name" TEXT NOT NULL,
    "supplier" TEXT,
    "unit" TEXT NOT NULL DEFAULT '個',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "kind" TEXT NOT NULL DEFAULT 'food',
    "seasonal" BOOLEAN NOT NULL DEFAULT false,
    "alert_threshold" DOUBLE PRECISION,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sort_order" INTEGER,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_prefix" TEXT,
    "sort_order" INTEGER,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "role" TEXT NOT NULL DEFAULT 'staff',
    "approve_brand" TEXT,
    "default_store" TEXT,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "app_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_entries" (
    "store_id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "note" TEXT,
    "entered_by" TEXT,

    CONSTRAINT "inventory_entries_pkey" PRIMARY KEY ("store_id","month","item_id")
);

-- CreateTable
CREATE TABLE "inventory_meta" (
    "store_id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completed_at" TIMESTAMP(3),
    "completed_by_name" TEXT,
    "input_by" TEXT,
    "order_by" TEXT,
    "mgr_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "mgr_confirmed_by" TEXT,
    "mgr_confirmed_at" TIMESTAMP(3),
    "mgr_signature" TEXT,

    CONSTRAINT "inventory_meta_pkey" PRIMARY KEY ("store_id","month")
);

-- CreateTable
CREATE TABLE "alert_comments" (
    "store_id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "store_comment" TEXT NOT NULL DEFAULT '',
    "store_comment_by" TEXT NOT NULL DEFAULT '',
    "manager_comment" TEXT NOT NULL DEFAULT '',
    "manager_comment_by" TEXT NOT NULL DEFAULT '',
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alert_comments_pkey" PRIMARY KEY ("store_id","month")
);

-- CreateTable
CREATE TABLE "transfer_slips" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "from_store" TEXT NOT NULL,
    "to_store" TEXT NOT NULL,
    "slip_date" TEXT,
    "slip_time" TEXT,
    "lines" JSONB NOT NULL DEFAULT '[]',
    "seller_name" TEXT,
    "seller_sig" TEXT,
    "seller_at" TIMESTAMP(3),
    "buyer_name" TEXT,
    "buyer_sig" TEXT,
    "buyer_at" TIMESTAMP(3),
    "buyer_reason" TEXT,
    "hq_by" TEXT,
    "hq_at" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'draft',
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transfer_slips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,
    "memo" TEXT,
    "is_headquarters" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_notes" (
    "supplier" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "supplier_notes_pkey" PRIMARY KEY ("supplier")
);

-- CreateTable
CREATE TABLE "approvals" (
    "brand" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "approved_by" TEXT NOT NULL,
    "approved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signature" TEXT,

    CONSTRAINT "approvals_pkey" PRIMARY KEY ("brand","month")
);

-- CreateTable
CREATE TABLE "seal_stamps" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stamped_by" TEXT NOT NULL,
    "stamped_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seal_stamps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coin_awards" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "brand" TEXT,
    "category" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "awarded_by" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "coin_awards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_loss" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "brand" TEXT,
    "category" TEXT,
    "staff_name" TEXT,
    "loss_date" TEXT,
    "loss_time" TEXT,
    "item_id" TEXT,
    "item_name" TEXT NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unit" TEXT,
    "reason" TEXT,
    "amount_excl" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "food_loss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "breakage" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "brand" TEXT,
    "category" TEXT,
    "staff_name" TEXT,
    "loss_date" TEXT,
    "loss_time" TEXT,
    "item_id" TEXT,
    "item_name" TEXT NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unit" TEXT,
    "reason" TEXT,
    "amount_excl" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "breakage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "breakage_items" (
    "id" TEXT NOT NULL,
    "brand" TEXT,
    "name" TEXT NOT NULL,
    "unit" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stock" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "supplier" TEXT,

    CONSTRAINT "breakage_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_settings" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "app_settings_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "app_config" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "app_config_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "login_id" TEXT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'staff',
    "position" TEXT,
    "default_store" TEXT,
    "approve_brand" TEXT,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "items_brand_idx" ON "items"("brand");

-- CreateIndex
CREATE INDEX "transfer_slips_month_idx" ON "transfer_slips"("month");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_brand_name_key" ON "suppliers"("brand", "name");

-- CreateIndex
CREATE INDEX "food_loss_period_idx" ON "food_loss"("period");

-- CreateIndex
CREATE INDEX "breakage_period_idx" ON "breakage"("period");
