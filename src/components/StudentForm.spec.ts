import { test, expect } from '@playwright/experimental-ct-vue'

import StudentForm from './StudentForm.vue'

// test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
    const students: any[] = []
    const component = await mount(StudentForm, {
        on: {
            saveStudent: (student: any) => {
                console.info('=====================')
                console.info(student)
                students.push(student)
            }
        }
    })
    await component.click()
    console.info(students);
    expect(students.length).toBe(0)
})
