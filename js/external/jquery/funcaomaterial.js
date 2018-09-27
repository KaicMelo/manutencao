       function validaCampos() {
           if ($("#matricula").val() == "") {
               $("#resp").html("<span>PREENCHA A MATRÍCULA</span>");
               return false;
           } else {
               if ($("#profissional").val() == "") {
                   $("#resp").html("<span>NOME DO PROFISSIONAL</span>");
                   return false;
               } else {
                   if ($("#empresa").val() == "") {
                       $("#resp").html("<span>NOME DO PROFISSIONAL</span>");
                       return false;
                   } else {
                       if ($("#funcao").val() == "") {
                           $("#resp").html("<span>PREENCHA A FUNÇÃO</span>");
                           return false;
                       } else {
                           if ($("#epi").val() == "") {
                               $("#resp").html("<span>PREENCHA O EPI</span>");
                               return false;
                           } else {
                               if ($("#ca").val() == "") {
                                   $("#resp").html("<span>PREENCHA O C.A</span>");
                                   return false;
                               } else {
                                   if ($("#validadeMaterial").val() == "") {
                                       $("#resp").html("<span>PREENCHA VALIDADE DO EPI</span>");
                                       return false;
                                   } else {
                                       if ($("#dataEntrega").val() == "") {
                                           $("#resp").html("<span>PREENCHA A DATA DE ENTREGA</span>");
                                           return false;
                                       } else {
                                           if ($("#dataTroca").val() == "") {
                                               $("#resp").html("<span>PRESNCHA A DATA PARA TROCA-LO</span>");
                                               return false;
                                           }
                                       }

                                   }

                               }


                           }
                       }
                   }

               }

           }
           return true;
       }

       function gravarDados() {
           var i;
           if (localStorage.length > 0) {
               i = parseInt(localStorage.getItem("qtdeCadastro")) + 1;
           } else {
               localStorage.setItem("qtdeCadastro", 1);
               i = 1;
           }
           localStorage.setItem("matricula" + i, $("#matricula").val());
           localStorage.setItem("profissional" + i, $("#profissional").val());
           localStorage.setItem("empresa" + i, $("#empresa").val());
           localStorage.setItem("funcao" + i, $("#funcao").val());
           localStorage.setItem("EPI" + i, $("#epi").val());
           localStorage.setItem("C.A" + i, $("#ca").val());
           localStorage.setItem("validade" + i, $("#validadeMaterial").val());
           localStorage.setItem("dataEntrega" + i, $("#dataEntrega").val());
           localStorage.setItem("dataTroca" + i, $("#dataTroca").val());
           localStorage.setItem("qtdeCadastro", i);
           i++;
           limpar();
       }

       function limpar() {
           $("#matricula").val("");
           $("#profissional").val("");
           $("#empresa").val("");
           $("#funcao").val("");
           $('input[name=tam]:checked').val("");
           $("#ca").val("");
           $("#validadeMaterial").val("");
           $("#dataEntrega").val("");
           $("#dataTroca").val("");
       }

       function buscar(matricula) {
           var flag = 0;
           if (localStorage.length > 0) {
               var q = parseInt(localStorage.getItem("qtdeCadastro"));
               for (i = 1; i <= q; i++) {
                   if (localStorage.getItem("matricula" + i) == matricula) {
                       flag = i;
                   }
               }


               if (flag != 0) {
                   $("#matricula").val(matricula);
                   $("#dados").append("<br>Profissional: " + (localStorage.getItem("profissional" + flag)));
                   $("#dados").append("<br>Empresa: " + (localStorage.getItem("empresa" + flag)));
                   $("#dados").append("<br>Função: " + (localStorage.getItem("funcao" + flag)));
                   $("#dados").append("<br>EPI: " + (localStorage.getItem("EPI" + flag)));
                   $("#dados").append("<br>C.A: " + (localStorage.getItem("C.A" + flag)));
                   $("#dados").append("<br>Validade Do EPI: " + (localStorage.getItem("validade" + flag)));
                   $("#dados").append("<br>Data Da Entrega: " + (localStorage.getItem("dataEntrega" + flag)));
                   $("#dados").append("<br>Data Da Troca: " + (localStorage.getItem("dataTroca" + flag)));
                   $("#dados").append("<hr>");



               } else {
                   $("#msg").dialog("open");
                   $("#msg").html("Nome não encontrado");
               }
           }
       }

       function excluir(matricula) {
           if (localStorage.length > 0) {
               var q = parseInt(localStorage.getItem("qtdeCadastro"));
               for (i = 1; i <= q; i++) {
                   if (localStorage.getItem("matricula" + i) == matricula) {
                       localStorage.removeItem("profissional" + i);
                       localStorage.removeItem("empresa" + i);
                       localStorage.removeItem("funcao" + i);
                       localStorage.removeItem("EPI" + i);
                       localStorage.removeItem("C.A" + i);
                       localStorage.removeItem("validade" + i);
                       localStorage.removeItem("dataEntrega" + i);
                       localStorage.removeItem("dataTroca" + i);

                   }
               }
           }
       }



       hoje = new Date();

       dia = hoje.getDate();

       dias = hoje.getDay();

       mes = hoje.getMonth();

       ano = hoje.getYear();


       if (dia < 10)
           dia = "0" + dia;

       if (ano < 2000)
           ano = 1900 + ano;

       function CriaArray(n) {

           this.length = n
       }


       NomeDia = new CriaArray(7)

       NomeDia[0] = "Domingo"

       NomeDia[1] = "Segunda-feira"

       NomeDia[2] = "Terça-feira"

       NomeDia[3] = "Quarta-feira"

       NomeDia[4] = "Quinta-feira"

       NomeDia[5] = "Sexta-feira"

       NomeDia[6] = "Sábado"



       NomeMes = new CriaArray(12)

       NomeMes[0] = "Janeiro"

       NomeMes[1] = "Fevereiro"

       NomeMes[2] = "Março"

       NomeMes[3] = "Abril"

       NomeMes[4] = "Maio"

       NomeMes[5] = "Junho"

       NomeMes[6] = "Julho"

       NomeMes[7] = "Agosto"

       NomeMes[8] = "Setembro"

       NomeMes[9] = "Outubro"

       NomeMes[10] = "Novembro"

       NomeMes[11] = "Dezembro"


       function mydate1() {
           d = new Date($("#validadeMaterial").val());
           dt = d.getDate();
           mes = d.getMonth();
           mes++;
           yy = d.getFullYear();
           alert(dt + "/" + mes + "/" + yy)


       }