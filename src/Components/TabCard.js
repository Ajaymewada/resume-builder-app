import React from 'react'

function TabCard(props) {
  return (
    <>
      {/* CARD 0 */}
      <div className={props.tabnumber === '0' ? 'card' : 'card d-none'}>
        <div className="card-header">
          <h1>Basic Details</h1>
        </div>
        <div className="card-body">
          <form action="">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='First Name *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Last Name *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <input type="email" className='form-control shadow-none' placeholder='Email *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <input type="mobile" className='form-control shadow-none' placeholder='Mobile Number *' />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Address *' />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <button className='btn primary-btn fs-18px float-end px-4'>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* CARD 1 */}
      <div className={props.tabnumber === '1' ? 'card' : 'card d-none'}>
        <div className="card-header">
          <h1>Education Details</h1>
        </div>
        <div className="card-body">
          <form action="">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Institute Name *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Education Level *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Percentage *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <label htmlFor="">Start Year *</label>
                  <input type="date" className='form-control shadow-none' placeholder='Start Year *' />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <label htmlFor="">End Year *</label>
                  <input type="date" className='form-control shadow-none' placeholder='End Year *' />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <button className='btn primary-btn fs-18px float-end px-4'>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* CARD 2 */}
      <div className={props.tabnumber === '2' ? 'card' : 'card d-none'}>
        <div className="card-header">
          <h1>Projects</h1>
        </div>
        <div className="card-body">
          <form action="">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='First Name' />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Last Name' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* CARD 3 */}
      <div className={props.tabnumber === '3' ? 'card' : 'card d-none'}>
        <div className="card-header">
          <h1>Certifications</h1>
        </div>
        <div className="card-body">
          <form action="">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='First Name' />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className='form-control shadow-none' placeholder='Last Name' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
    
  )
}

export default TabCard