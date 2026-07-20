import {Page, Locator, expect} from '@playwright/test';

export class newTest {

    readonly EnrollButton : Locator;
    readonly courseTitle  : Locator;
    readonly confirmationButton : Locator;
    readonly redirectButton : Locator;
    readonly notification : Locator;
    readonly MycoursePage : Locator;
    readonly courseList : Locator;

    constructor (
        private page : Page) {
        this.page = page;
        this.EnrollButton = page.getByRole('button', {name : 'Enroll'});
        this.courseTitle = page.getByText('Introduction to Testing');
        this.confirmationButton = page.getByRole('button', {name : 'confirmation'});
        this.redirectButton = page.getByRole('button',{name :'go to course'});
        this.notification = page.getByPlaceholder('success');
        this.MycoursePage = page.getByTestId('my-course');
        this.courseList = page.getByTestId('course-list');
        }

    async openwebsite (){

        await this.page.goto ('https/test/coure_page')

    }

    async enrollCourse(){

        await expect(this.courseTitle).toBeVisible();
        await expect(this.EnrollButton).toBeVisible();

        // step 2
        await this.EnrollButton.click();

        // step 3
        await expect(this.confirmationButton).toBeVisible();
        await this.confirmationButton.click();

        await expect(this.notification).toBeVisible();

        // step4 
        await expect(this.redirectButton).toBeVisible();
        await this.redirectButton.click();

        // step 5 
        await expect(this.MycoursePage).toBeVisible();
        await expect(this.courseList).toHaveText('Introduction to Testing');

    }
}