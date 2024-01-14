 
 
 var p = document.getElementsByTagName('p')

  /*
  // O lenght mostra a quantidade de linhas no caso com a tag 'p'
  alert(p.length)
  */



  /*
  // o innerHtml pega o nome que estão contidos dentro da tag
  alert(p[0].innerHTML)
  */



  /*
  // Desse modo podemos mudar o nome da tag'p'
  p[0].innerHTML = 'Manipulando via JS!'

  // Aqui colocamos um laço de repetição para mudar o nome das tags e colocar seu índice
  for(var i = 0; i < 10; i++){
    p[i].innerHTML = 'Manipulando via JS! ' + i
  }
  */





  // Aqui estamos colocando que o p[0], ou seja o primeiro parágrafo. E vai mostrar o nome dele e do 0 ao 10, que é representado pelo índice o "i"
  for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i
  }

  // Não necessariamente precisa ser o índice, pode ser qualquer outra coisa.
  for(var i = 0; i < 10; i++){
    p[1].innerHTML = p[1].innerHTML + '- Olá Ramon -'
  }