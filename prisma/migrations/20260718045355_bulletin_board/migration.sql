-- CreateTable
CREATE TABLE "bulletin_posts" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL DEFAULT 'all',
    "body" TEXT NOT NULL,
    "author_id" TEXT,
    "author_name" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bulletin_posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "bulletin_posts_brand_idx" ON "bulletin_posts"("brand");
