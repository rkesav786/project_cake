import React from 'react'
import Navbar from './component/Navbar';
function Specialitycake() {

  let Scake = [
{
cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/AfterNineCake2Large.jpg',
cakename:'After Nine Cake'

},{
cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Chocolate_Nougatine_Cake_3_Large_6b24a6e7-df97-44cb-bd7f-8875ca6b9c31.jpg?v=1700906862',
cakename:'Almond Nougatine Cake'

},
{
cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Cappuccino_Cake_3_Large_29fb614e-7145-4c47-9eeb-9eeab5cd8cc9.jpg?v=1699615115',
cakename:'Cappuccino Cake'

},
{
  cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/CarrotCake3Large.jpg?v=1702989501',
  cakename:'Carrot Cake'
  
  },
  {
    cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/ChocolatemousseCake3Large.jpg?v=1702989535',
    cakename:'Chocolate Mousse Cake'
    
    },
    {
      cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Chocolate_Oreo_Cake_2_Large_c4138f7d-1958-44d2-a1a2-77053aaef51b.jpg?v=1708327547',
      cakename:'Chocolate Oreo Cake'
      
      },
      {
        cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Dense_Loaf_Truffle_Cake_2_Large_75eb11a2-2fb6-4468-a706-187a01ebeef2.jpg',
        cakename:'Dense Loaf Truffle Cake'
        
        },
        {
          cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Freshfruitandcreamcake1.jpg',
          cakename:'Fresh Fruit & Cream Cake'
          
          },
          {
            cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Lemon_mountain_Cake_1_Large_9b7a4b19-1ee3-4d24-995c-a0be99f5f4d4.jpg?v=1699615976',
            cakename:'Lemon Mountain Cake'
            
            },
            {
              cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/NYBakedCheeseCake2Large.jpg?v=1702540705',
              cakename:'New York Style Baked Cheesecake'
              
              },
              {
                cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Opera_Cake_2_Large_1f547d58-0b32-4840-91d5-488cd09abc96.jpg',
                cakename:'Opera Cake'
                
                },
                {
                  cakeimg:'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Tiramisu_Cake_1_Large_0387576f-5fdf-4ff8-bb91-cf5138ec8b6f.jpg?v=1700907098',
                  cakename:'Tiramisu Cake'
                  
                }
 ]
  return (


  <>
  <Navbar/>
 <div style={{backgroundColor:"#fff0f7"}}>
<h1 className='text-center fw-bold fs-1 p-3'style={{color:"#6C0345",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Speciality Cakes</h1>
<p className='text-center lh-lg pb-4'style={{letterSpacing:"2px"}}>Our made-to-order range of speciality cakes is here to make any celebration great! <br /> From Theobroma classic cakes to gourmet cakes to customized theme cakes, <br /> we have something for every special occasion.</p>
 </div>
<div className="row ms-3">
  {Scake.map((scake,index)=>(

<div className="col-sm-3 mt-5 ">
<img className='img-fluid' src={scake.cakeimg} alt="" />
<h5 className='text-center mt-4 mb-3' style={{color:'#6C0345'}}>{scake.cakename}</h5>
</div>

  ))}

</div>
  </>
  )
}

export default Specialitycake 