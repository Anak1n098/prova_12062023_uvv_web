function numerosPrimos(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
for (var i = 1; i <= 1000; i++) {
    if (numerosPrimos(i)) {
      console.log(i);
    }
  }