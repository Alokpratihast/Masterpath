-- CreateTable
CREATE TABLE `PlacementApplication` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `courseSlug` VARCHAR(191) NULL,
    `courseName` VARCHAR(191) NULL,
    `resumeUrl` VARCHAR(191) NULL,
    `resumeName` VARCHAR(191) NULL,
    `status` ENUM('NEW', 'REVIEWED', 'SHORTLISTED', 'REJECTED') NOT NULL DEFAULT 'NEW',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
