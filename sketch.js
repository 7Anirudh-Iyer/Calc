const canvas = document.getElementById('c1')
const c = canvas.getContext('2d')
let q = []
let g = 0
let m = 'function'


function draw() {
    c.canvas.width = window.innerWidth;
    c.canvas.height = window.innerHeight;
    let f,r,s

    c.strokeStyle = 'white'
    c.strokeRect(2,330,250,260)

    // c.fillStyle = 'white'
    // c.font = '18px TimesNewRoman'
    // document.getElementById('n1').value=('Simple Calculations',30,400)
    // document.getElementById('n1').value=('Functions',30,490)


    //numbers
    {
        document.getElementById('b.').onclick = function() {
            q.push('.')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b1').onclick = function() {
            q.push('1')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b2').onclick = function() {
            q.push('2')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b3').onclick = function() {
            q.push('3')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b4').onclick = function() {
            q.push('4')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b5').onclick = function() {
            q.push('5')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b6').onclick = function() {
            q.push('6')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b7').onclick = function() {
            q.push('7')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b8').onclick = function() {
            q.push('8')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b9').onclick = function() {
            q.push('9')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b0').onclick = function() {
            q.push('0')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
    }

    //simple calculations
    {
        document.getElementById('b+').onclick = function() {
            q.push('+')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b-').onclick = function() {
            q.push('-')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b*').onclick = function() {
            q.push('*')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
        document.getElementById('b/').onclick = function() {
            q.push('/')
            let b = q.join("")
            document.getElementById('n1').value=b
        }
    }

    //functions
    {
        document.getElementById('bc').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.ceil(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='ceil('+du+') = '+dude
            
        }
        document.getElementById('bf').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.floor(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='floor('+du+') = '+dude
            
        }
        document.getElementById('ba').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.abs(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='abs('+du+') = '+dude
            
        }
        document.getElementById('bs').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.sqrt(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='sqrt('+du+') = '+dude
            
        }
        document.getElementById('bcb').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.cbrt(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='cbrt('+du+') = '+dude
            
        }
        document.getElementById('bsin').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.sin(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='sin('+du+') = '+dude
            
        }
        document.getElementById('bcos').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.cos(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='cos('+du+') = '+dude
            
        }
        document.getElementById('btan').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.tan(du)
            q = []
            q.push(dude)
            document.getElementById('n1').value='tan('+du+') = '+dude
            
        }
        document.getElementById('bpi').onclick = function() {
            let b = document.getElementById('n1').value
            let du = parseFloat(b)
            let dude = Math.PI
            q = []
            q.push(dude)
            document.getElementById('n1').value=dude
            
        }
    }

    document.getElementById('b=').onclick = function(){
        let b = document.getElementById('n1').value
        let a = eval(b)
        q = []
        q.push(a)
        document.getElementById('n1').value=a
    }

    document.getElementById('bclear').onclick = function(){
        document.getElementById('n1').value = ""
        q = []
    }
  
}

let callfunction = setInterval(draw, 100)
