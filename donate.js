document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const donate1 = document.getElementById('input-donate1').value;
    const donateNumber1 = parseFloat(donate1);
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    const donationBalance1 = document.getElementById('donation-balance1').innerText;
    const donationBalanceNumber1 = parseFloat(donationBalance1);
    if(donate1 === ''){
        return donateNumber1 = 0;    
        return 'Enter Donation Amount';    
    }
    const donationBalanceAmount1 = donationBalanceNumber1 + donateNumber1;
    const newMainBalance = mainBalanceNumber - donateNumber1;
    document.getElementById('main-balance').innerText = newMainBalance + ' BDT'; 
    document.getElementById('donation-balance1').innerText = donationBalanceAmount1 + ' BDT';
}) 