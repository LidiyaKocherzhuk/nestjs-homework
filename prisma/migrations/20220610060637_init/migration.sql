-- AlterTable
ALTER TABLE `tokens` MODIFY `accessToken` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Tokens` ADD CONSTRAINT `Tokens_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
