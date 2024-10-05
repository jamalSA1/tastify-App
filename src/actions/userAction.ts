'use server'

import db from " /db"

export async function createUser(email: string, name?: string) {
  const existingUser = await db.userTastify.findUnique({
    where: {
      email: email,
    },
  })
  if (existingUser) {
    // إذا كان المستخدم موجودًا، يمكنك إما تجاهل الإنشاء أو تحديث المستخدم
    console.log("User already exists with this email:", email)
    return existingUser;  // أو قم بتحديث البيانات إذا كنت تريد ذلك
  }
  const user = await db.userTastify.create({
    data: {
      email: email || '',
      name: name,
    },
  })
  console.log(user);

  return user
}