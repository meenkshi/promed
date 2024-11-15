function PromoCodeCopy(){
    var temp=document.createElement('input');
    var texttoCopy=document.querySelector('.promo-code').innerHTML;
    temp.type='input';
    temp.setAttribute('value',texttoCopy);
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }