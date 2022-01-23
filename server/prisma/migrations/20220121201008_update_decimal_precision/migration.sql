/*
  Warnings:

  - You are about to alter the column `ttPrice` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,5)`.
  - You are about to alter the column `decay` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,5)`.

*/
-- AlterTable
ALTER TABLE `Item` MODIFY `ttPrice` DECIMAL(10, 5) NOT NULL DEFAULT 0,
    MODIFY `decay` DECIMAL(10, 5) NOT NULL DEFAULT 0;
