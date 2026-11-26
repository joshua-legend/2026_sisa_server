import mysql from "mysql2/promise";
import { fakerKO } from "@faker-js/faker";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "company",
  password: "1234",
});

// 직원 테이블에 1000명 이상의 멤버 만들어야함 ㅇㅈ?
const employees = Array(1000)
  .fill(0)
  .map((v) => ({ name: fakerKO.person.fullName(), department: fakerKO.person.jobTitle() }))
  .map((v) => [v.name, v.department]);

pool.query("insert into employees (name, department) values ? ", [employees]);
