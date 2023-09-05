import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBooksCountToAuthor1693925364083 implements MigrationInterface {
    name = 'AddBooksCountToAuthor1693925364083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`book_author\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`book_category\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_54f49efe2dd4d2850e736e9ab86\` FOREIGN KEY (\`authorId\`) REFERENCES \`authors\`(\`authorId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_a0f13454de3df36e337e01dbd55\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`categoryId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_a0f13454de3df36e337e01dbd55\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_54f49efe2dd4d2850e736e9ab86\``);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`book_category\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`categoryId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`book_author\` FOREIGN KEY (\`authorId\`) REFERENCES \`authors\`(\`authorId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
