-- 棚卸エントリに単価スナップショット列を追加
-- 月ごとに変動する食材原価でも、過去月度の棚卸金額が後からのマスタ単価変更でブレないようにする
ALTER TABLE "inventory_entries" ADD COLUMN "unit_price" DOUBLE PRECISION;

-- 既存の棚卸データには、現在（修正済み）のマスタ単価を基準値として記録する
UPDATE "inventory_entries" e
SET "unit_price" = i."price"
FROM "items" i
WHERE e."item_id" = i."id"
  AND e."unit_price" IS NULL;
