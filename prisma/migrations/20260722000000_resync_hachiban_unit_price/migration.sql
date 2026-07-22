-- 8番（hachiban）の保存済み棚卸の単価スナップショットを、更新後のマスタ単価に再同期する。
-- マスタ単価の誤りを修正したため、過去月度の棚卸金額も新しいマスタ単価に揃える。
-- （区分＝食材/備品はマスタを直接参照するため、この更新なしで全月度に反映済み）
UPDATE "inventory_entries" e
SET "unit_price" = i."price"
FROM "items" i
WHERE e."item_id" = i."id"
  AND i."brand" = 'hachiban';
