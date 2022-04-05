import './Home.css';
import aadhaarLogo from '../assets/1200px-Aadhaar_Logo.svg.png';

export default function Home() {
  return (
    <section>
      <h1 className='h1'>Register Aadhaar</h1>
      <div className='flex modal'>
        <div className='aadhaar-logo'>
          <img src={aadhaarLogo} alt='aadhaar-logo' />
        </div>
        <div className='verification-form'>
          <div className='aadhaar-input flex'>
            <input type='number' />
            <button className='btn brand-color'>Verify</button>
          </div>

          <label>
            <input type='checkbox' /> I agree to eSign this KYC document to get
            started
          </label>

          <div className='otp-input flex'>
            <input type='number' />
            <button className='btn brand-color'>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
