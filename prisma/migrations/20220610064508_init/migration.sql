-- AlterTable
ALTER TABLE `tokens` MODIFY `accessToken` VARCHAR(250) NULL,
    MODIFY `refreshToken` VARCHAR(250) NOT NULL;
