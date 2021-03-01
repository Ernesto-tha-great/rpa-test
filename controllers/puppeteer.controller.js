const puppeteer = require('puppeteer');

exports.fill_form = (req, res, next) => {
   ( async () => {
        try { 
         const browser = await puppeteer.launch({
             ignoreDefaultArgs: ['--disable-extensions'],
         headless: false,
         
         executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
       });
       const page = await browser.newPage();
     
       await page.goto('https://frontier.jobs/jobs/190562/apply/about');
     
       await page.type('input[name=fullname]', 'john');
       await page.type('input[name=lastname]', 'doe');
       await page.type('input[name=email]', 'yes@gmail.com');
       await page.type('input[name=phoneno]', '2349888888888');
       await page.type('input[name=location]', 'lagos, nigeria');
       await page.type('input[name=linkedin]', 'linkedin.com/profile/me');
     // await page.type('input[name=resume]', 'https://frontier-public-assets.s3-us-west-2.amazonaws.com/05oo7evmr4hsc7ufvmdcpojlh1ki1rd3benjo0g1_Brian_CV.docx');
      
       await page.click('next');
     // await page.click('footer.sc-eEfYrc hKiIRc.sc-ehSCib jDuzGS sc-epptyN RpuPK');
     
       await page.waitForNavigation(0);
       console.log('New Page URL:', page.url());
       await browser.close();
     }catch (err) {
         console.log(err);
     }
     })();
     
};