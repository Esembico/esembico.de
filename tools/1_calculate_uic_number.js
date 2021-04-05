function calculate()
{
     function calculate() {
          const inputElement = $("#input-value");
          const resultElement = $("#uic");
          const arr = Array.from(String(inputElement.val()), Number);
          arr.forEach(myFunction);

          // number 31816650286 should be 6 1 16 1 12 6 10 0 4 8 12
          function myFunction(item, index, arr) {
              if (index % 2 === 0) {
                  arr[index] = item * 2;
              } else {
                  arr[index] = item * 1;
              }

          }

          const sum = arr.reduce(function (accumulator, current) {
              return accumulator + (current < 10 ? current : current % 9);
          });
          resultElement.val(inputElement.val() + "" + sum % 10);
          resultElement.trigger("change")
      }
