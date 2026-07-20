import {test, expect} from '@playwright/test';
import {newTest} from '../pages/newTest';

let NewTest : newTest ;

test.beforeEach(async({page})=> {

     NewTest = new newTest (page);
     await NewTest.openwebsite();

})

test('courseEnroll', async({page}) =>{

    await NewTest.enrollCourse();

});
