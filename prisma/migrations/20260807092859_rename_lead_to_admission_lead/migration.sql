/*
  Warnings:

  - You are about to drop the `Lead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Lead`;

-- CreateTable
CREATE TABLE `AdmissionLead` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `courseSlug` VARCHAR(191) NOT NULL,
    `courseName` VARCHAR(191) NOT NULL,
    `source` ENUM('WEBSITE', 'GOOGLE', 'FACEBOOK', 'INSTAGRAM', 'LINKEDIN') NOT NULL DEFAULT 'WEBSITE',
    `status` ENUM('NEW', 'CONTACTED', 'CLOSED') NOT NULL DEFAULT 'NEW',
    `remarks` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
