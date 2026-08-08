/*
  Warnings:

  - You are about to drop the `AdmissionLead` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactLead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `AdmissionLead`;

-- DropTable
DROP TABLE `ContactLead`;

-- CreateTable
CREATE TABLE `Lead` (
    `id` VARCHAR(191) NOT NULL,
    `neoDoveLeadId` VARCHAR(191) NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `type` ENUM('ADMISSION', 'CONTACT') NOT NULL DEFAULT 'ADMISSION',
    `campaignId` VARCHAR(191) NULL,
    `courseSlug` VARCHAR(191) NULL,
    `courseName` VARCHAR(191) NULL,
    `subject` VARCHAR(191) NULL,
    `message` VARCHAR(191) NULL,
    `source` ENUM('WEBSITE', 'GOOGLE', 'FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'NEODOVE') NOT NULL DEFAULT 'WEBSITE',
    `status` ENUM('NEW', 'CONTACTED', 'CLOSED') NOT NULL DEFAULT 'NEW',
    `remarks` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Lead_neoDoveLeadId_key`(`neoDoveLeadId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Campaign` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `neoDoveCampaignId` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Campaign_slug_key`(`slug`),
    UNIQUE INDEX `Campaign_neoDoveCampaignId_key`(`neoDoveCampaignId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lead` ADD CONSTRAINT `Lead_campaignId_fkey` FOREIGN KEY (`campaignId`) REFERENCES `Campaign`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
