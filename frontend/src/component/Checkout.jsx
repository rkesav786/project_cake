import React from 'react'

function Checkout() {
  return (
  <>
  {/* <div style={{backgroundColor:"#fff0f7"}}>
<h4>
  
</h4>
  </div> */}
  <h5 className='text-start fw-bold'>Receiver details</h5>
  <div className="row">
    <div className="col-lg-5">
 <div className="card">
  <div className="card-body "style={{backgroundColor:"#fff0f7"}}>
  <form>
  <div className="row mb-3">
    <div className="col-md-6">
      <label htmlFor="name" className="form-label">Receiver's Name *</label>
      <input type="text" className="form-control" id="name" placeholder="Full Name" />
    </div>
    <div className="col-md-6">
    <form action="">
    <label htmlFor="name" className="form-label">Contact Number *</label>
                      <div className="input-group input-group-sm ">
                        <div className="input-group-prepend">
                          <input type="text" className="form-control" style={{ maxWidth: 60 }} placeholder="+91" />
                        </div>
                        <input type="text" className="form-control" placeholder="Enter your mobile number" />
                      
                      </div>
                    </form>
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label">Receiver's Country *</label>
      <input type="text" className="form-control" id="phone" placeholder="" />
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label">Receiver's Pin Code *</label>
      <input type="text" className="form-control" id="phone" placeholder="" />
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label">Receiver's State *</label>
      <input type="text" className="form-control" id="phone" placeholder="" />
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label">Receiver's Town/City *</label>
      <input type="text" className="form-control" id="phone" placeholder="" />
    </div>
    <div class="col-12">
          <label for="address" class="form-label">Address</label>
          <textarea class="form-control" id="address" rows="4" placeholder="Enter your address"></textarea>
        </div>
  </div>

</form>
  </div>
 </div>
 <div className='mt-5'>
  <h5 className='text-start fw-bold'>Sender Details</h5>
  <div className="card">
  <div className="card-body "style={{backgroundColor:"#fff0f7"}}>
  <form>
  <div className="row mb-3">
    <div className="col-md-6">
      <label htmlFor="name" className="form-label"> Name *</label>
      <input type="text" className="form-control" id="name" placeholder="Full Name" />
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label">Email id *</label>
      <input type="text" className="form-control" id="phone" placeholder="E-mail" />
    </div>
    <div className="col-md-6">
    <form action="">
    <label htmlFor="name" className="form-label">Contact Number *</label>
                      <div className="input-group  input-group-sm">
                        <div className="input-group-prepend">
                          <input type="text" className="form-control" style={{ maxWidth: 60 }} placeholder="+91" />
                        </div>
                        <input type="text" className="form-control" placeholder="Enter your mobile number" />
                      
                      </div>
                    </form>
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label">Town/City *</label>
      <input type="text" className="form-control" id="phone" placeholder="" />
    </div>
  
  </div>

</form>
  </div>
 </div>
 </div>
    </div>
  </div>
  
  
  </>
  )
}

export default Checkout