const sum=require('./sum');
const common=require('./common');

beforeEach(()=>{
    console.warn(common());
})
test("test function",()=>{

    expect(sum()).toBe(40)

}) 
test("test function 2",()=>{

    expect(sum()).toBe(40)

}) 
test("test function 3",()=>{

    expect(sum()).toBe(40)

}) 