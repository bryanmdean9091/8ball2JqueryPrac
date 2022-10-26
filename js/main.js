const replies = [
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Better not tell you",
    "Cannot predict now",
    "Ask again",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ]; //14
  
  let reply = replies[Math.floor(Math.random() * 13)];
  console.log(reply)
 


  
     $(document).ready(function() {
      $('.rainbow-text').hide()
      $('.replayBtn').hide()
      $('.pic2').hide()
         $('.shakeBtn').click(function(){
            $('.blackEight').fadeOut(5000)
            $('.pic').toggle(6000, (function(){
               $('.pic2').toggle([6000])
               $('.shakeBtn').hide()
               $('.replayBtn').show()
               $('.rainbow-text').fadeIn(2000)
               $('h2').text(`${reply}`)
               $('.replayBtn').click(function(){
               //   $('input').hide()
               //   $('h2').text('')
               //   $('.replayBtn').hide()
               //   $('.pic2').toggle(1000)
               //   $('.pic').toggle(1000)
               //   $('.rainbow-text').hide()
               //   $('.shakeBtn').show()
               //   $('.blackEight').show()
               })
            }))
         })
          });