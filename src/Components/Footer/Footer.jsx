import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="email-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div>
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className="email"
          />
          <button className="subscribe">SUBSCRIBE</button>
        </div>
        </div>
        <div className="details-section">
          <div className="contactus">
            <h3>CONTACT US</h3>
            <div className="contactus-details">
            <p className="">+44 221 133 5360</p>
            <p className="emailid">customercare@mettamuse.com</p>
            </div>
          </div>
          <div className="currency">
            <h3>CURRENCY</h3>
            <div className="currency-details">
              <div className="flag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_653_3386)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H38.0004V1.53848H0V0ZM0 3.07695H38.0004V4.61543H0V3.07695ZM0 6.15391H38.0004V7.69238H0V6.15391ZM0 9.23086H38.0004V10.7693H0V9.23086ZM0 12.3078H38.0004V13.8463H0V12.3078ZM0 15.3848H38.0004V16.9232H0V15.3848ZM0 18.4617H38.0004V20.0002H0V18.4617Z"
                      fill="#BD3D44"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1.53809H38.0004V3.07656H0V1.53809ZM0 4.61504H38.0004V6.15352H0V4.61504ZM0 7.69199H38.0004V9.23047H0V7.69199ZM0 10.7689H38.0004V12.3074H0V10.7689ZM0 13.8459H38.0004V15.3844H0V13.8459ZM0 16.9228H38.0004V18.4613H0V16.9228Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H15.2002V10.7693H0V0Z"
                      fill="#192F5D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.26066 0.461914L1.41449 0.892656H1.84527L1.49141 1.15422L1.62988 1.56961L1.26066 1.30805L0.922188 1.56961L1.06066 1.15422L0.691406 0.892656H1.15301L1.26066 0.461914ZM3.79914 0.461914L3.93762 0.892656H4.38375L4.01453 1.15422L4.16836 1.56961L3.79914 1.30805L3.42992 1.56961L3.58375 1.15422L3.21453 0.892656H3.66066L3.79914 0.461914ZM6.33762 0.461914L6.47609 0.892656H6.92223L6.55301 1.15422L6.70687 1.56961L6.33762 1.30805L5.9684 1.56961L6.12223 1.15422L5.75301 0.892656H6.19918L6.33762 0.461914ZM8.86074 0.461914L9.01457 0.892656H9.44535L9.09148 1.15422L9.22996 1.56961L8.86074 1.30805L8.50687 1.56961L8.64535 1.15422L8.27609 0.892656H8.73766L8.86074 0.461914ZM11.3992 0.461914L11.5377 0.892656H11.9838L11.6146 1.15422L11.7684 1.56961L11.3838 1.30805L11.03 1.56961L11.1684 1.15422L10.7992 0.892656H11.2454L11.3992 0.461914ZM13.9377 0.461914L14.0762 0.892656H14.5223L14.1531 1.15422L14.3069 1.56961L13.9377 1.30805L13.5685 1.56961L13.7223 1.15422L13.3531 0.892656H13.7992L13.9377 0.461914ZM2.53758 1.53883L2.67605 1.96961H3.12223L2.75297 2.23113L2.90684 2.64652L2.53758 2.385L2.16836 2.64652L2.32219 2.23113L1.95297 1.96961H2.39914L2.53758 1.53883ZM5.0607 1.53883L5.21453 1.96961H5.64531L5.29144 2.23113L5.42992 2.64652L5.0607 2.385L4.70684 2.64652L4.84531 2.23113L4.47605 1.96961H4.93762L5.0607 1.53883ZM7.59918 1.53883L7.73766 1.96961H8.18379L7.81457 2.23113L7.9684 2.64652L7.59918 2.385L7.22992 2.64652L7.38379 2.23113L7.01457 1.96961H7.4607L7.59918 1.53883ZM10.1377 1.53883L10.2761 1.96961H10.7223L10.353 2.23113L10.5069 2.64652L10.1377 2.385L9.76844 2.64652L9.92227 2.23113L9.55305 1.96961H9.99922L10.1377 1.53883ZM12.6608 1.53883L12.8146 1.96961H13.23L12.8761 2.23113L13.0146 2.64652L12.6454 2.385L12.2915 2.64652L12.43 2.23113L12.0607 1.96961H12.5223L12.6608 1.53883ZM1.27602 2.61578L1.3991 3.04652H1.86066L1.49141 3.30809L1.62988 3.72348L1.26066 3.46191L0.922188 3.72348L1.06066 3.30809L0.691406 3.04652H1.15301L1.27602 2.61578ZM3.79914 2.61578L3.93762 3.04652H4.38375L4.02992 3.30809L4.16836 3.72348L3.79914 3.46191L3.44527 3.72348L3.58375 3.30809L3.21453 3.04652H3.66066L3.79914 2.61578ZM6.33762 2.61578L6.47609 3.04652H6.92223L6.55301 3.30809L6.70687 3.72348L6.33762 3.46191L5.9684 3.72348L6.12223 3.30809L5.75301 3.04652H6.19918L6.33762 2.61578ZM8.86074 2.61578L9.01457 3.04652H9.44535L9.09148 3.30809L9.22996 3.72348L8.86074 3.46191L8.50687 3.72348L8.64535 3.30809L8.27609 3.04652H8.73766L8.86074 2.61578ZM11.3992 2.61578L11.5377 3.04652H11.9838L11.63 3.30809L11.7684 3.72348L11.3992 3.46191L11.0454 3.72348L11.1838 3.30809L10.8146 3.04652H11.2607L11.3992 2.61578ZM13.9377 2.61578L14.0762 3.04652H14.5223L14.1531 3.30809L14.3069 3.72348L13.9377 3.46191L13.5685 3.72348L13.7223 3.30809L13.3531 3.04652H13.7992L13.9377 2.61578ZM2.53758 3.69266L2.67605 4.12344H3.12223L2.75297 4.38496L2.90684 4.80035L2.53758 4.53883L2.16836 4.80035L2.32219 4.38496L1.95297 4.12344H2.39914L2.53758 3.69266ZM5.0607 3.69266L5.21453 4.12344H5.64531L5.29144 4.38496L5.42992 4.80035L5.0607 4.53883L4.70684 4.80035L4.84531 4.38496L4.47605 4.12344H4.93762L5.0607 3.69266ZM7.59918 3.69266L7.73766 4.12344H8.18379L7.82996 4.38496L7.9684 4.80035L7.59918 4.53883L7.24531 4.80035L7.38379 4.38496L7.01457 4.12344H7.4607L7.59918 3.69266ZM10.1377 3.69266L10.2761 4.12344H10.7223L10.353 4.38496L10.5069 4.80039L10.1377 4.53887L9.76844 4.80039L9.92227 4.385L9.55305 4.12348H9.99922L10.1377 3.69266ZM12.6608 3.69266L12.8146 4.12344H13.23L12.8761 4.38496L13.0146 4.80035L12.6454 4.53883L12.2915 4.80035L12.43 4.38496L12.0607 4.12344H12.5223L12.6608 3.69266ZM1.27602 4.76961L1.3991 5.20035H1.86066L1.49141 5.46191L1.62988 5.87731L1.26066 5.61574L0.922188 5.87731L1.06066 5.46191L0.691406 5.20035H1.15301L1.27602 4.76961ZM3.79914 4.76961L3.93762 5.20035H4.38375L4.02992 5.46191L4.16836 5.87731L3.79914 5.61574L3.44527 5.87731L3.58375 5.46191L3.21453 5.20035H3.66066L3.79914 4.76961ZM6.33762 4.76961L6.47609 5.20035H6.92223L6.55301 5.46191L6.70687 5.87731L6.33762 5.61574L5.9684 5.87731L6.12223 5.46191L5.75301 5.20035H6.19918L6.33762 4.76961ZM8.86074 4.76961L9.01457 5.20035H9.44535L9.09148 5.46191L9.22996 5.87731L8.86074 5.61574L8.50687 5.87731L8.64535 5.46191L8.27609 5.20035H8.73766L8.86074 4.76961ZM11.3992 4.76961L11.5377 5.20035H11.9838L11.63 5.46191L11.7684 5.87731L11.3992 5.61574L11.0454 5.87731L11.1838 5.46191L10.8146 5.20035H11.2607L11.3992 4.76961ZM13.9377 4.76961L14.0762 5.20035H14.5223L14.1531 5.46191L14.3069 5.87731L13.9377 5.61574L13.5685 5.87731L13.7223 5.46191L13.3531 5.20035H13.7992L13.9377 4.76961ZM2.53758 5.84652L2.67605 6.27731H3.12223L2.75297 6.53883L2.90684 6.95422L2.53758 6.6927L2.16836 6.95422L2.32219 6.53883L1.95297 6.27731H2.39914L2.53758 5.84652ZM5.0607 5.84652L5.21453 6.27731H5.64531L5.29144 6.53883L5.42992 6.95422L5.0607 6.6927L4.70684 6.95422L4.84531 6.53883L4.47605 6.27731H4.93762L5.0607 5.84652ZM7.59918 5.84652L7.73766 6.27731H8.18379L7.82996 6.53883L7.9684 6.95422L7.59918 6.6927L7.24531 6.95422L7.38379 6.53883L7.01457 6.27731H7.4607L7.59918 5.84652ZM10.1377 5.84652L10.2761 6.27731H10.7223L10.353 6.53883L10.5069 6.95426L10.1377 6.69273L9.76844 6.95426L9.92227 6.53887L9.55305 6.27734H9.99922L10.1377 5.84652ZM12.6608 5.84652L12.8146 6.27731H13.23L12.8761 6.53883L13.0146 6.95422L12.6454 6.6927L12.2915 6.95422L12.43 6.53883L12.0607 6.27731H12.5223L12.6608 5.84652ZM1.27602 6.92348L1.3991 7.35422H1.86066L1.49141 7.61578L1.62988 8.03117L1.26066 7.76961L0.922188 8.03117L1.06066 7.61578L0.691406 7.35422H1.15301L1.27602 6.92348ZM3.79914 6.92348L3.93762 7.35422H4.38375L4.02992 7.61578L4.16836 8.03117L3.79914 7.76961L3.44527 8.03117L3.58375 7.61578L3.21453 7.35422H3.66066L3.79914 6.92348ZM6.33762 6.92348L6.47609 7.35422H6.92223L6.55301 7.61578L6.70687 8.03117L6.33762 7.76961L5.9684 8.03117L6.12223 7.61578L5.75301 7.35422H6.19918L6.33762 6.92348ZM8.86074 6.92348L9.01457 7.35422H9.44535L9.09148 7.61578L9.22996 8.03117L8.86074 7.76961L8.50687 8.03117L8.64535 7.61578L8.27609 7.35422H8.73766L8.86074 6.92348ZM11.3992 6.92348L11.5377 7.35422H11.9838L11.63 7.61578L11.7684 8.03117L11.3992 7.76961L11.0454 8.03117L11.1838 7.61578L10.8146 7.35422H11.2607L11.3992 6.92348ZM13.9377 6.92348L14.0762 7.35422H14.5223L14.1531 7.61578L14.3069 8.03117L13.9377 7.76961L13.5685 8.03117L13.7223 7.61578L13.3531 7.35422H13.7992L13.9377 6.92348ZM2.53758 8.00043L2.67605 8.43121H3.12223L2.75297 8.69273L2.90684 9.10812L2.53758 8.8466L2.16836 9.10812L2.32219 8.69273L1.95297 8.43121H2.39914L2.53758 8.00043ZM5.0607 8.00043L5.21453 8.43121H5.64531L5.29144 8.69273L5.42992 9.10812L5.0607 8.8466L4.70684 9.10812L4.84531 8.69273L4.47605 8.43121H4.93762L5.0607 8.00043ZM7.59918 8.00043L7.73766 8.43121H8.18379L7.82996 8.69273L7.9684 9.10812L7.59918 8.8466L7.24531 9.10812L7.38379 8.69273L7.01457 8.43121H7.4607L7.59918 8.00043ZM10.1377 8.00043L10.2761 8.43121H10.7223L10.353 8.69273L10.5069 9.10816L10.1377 8.84664L9.76844 9.10816L9.92227 8.69277L9.55305 8.43125H9.99922L10.1377 8.00043ZM12.6608 8.00043L12.8146 8.43121H13.23L12.8761 8.69273L13.0146 9.10812L12.6454 8.8466L12.2915 9.10812L12.43 8.69273L12.0607 8.43121H12.5223L12.6608 8.00043ZM1.27602 9.07738L1.3991 9.50813H1.86066L1.49141 9.76969L1.62988 10.1851L1.26066 9.92352L0.922188 10.1851L1.06066 9.76969L0.691406 9.50813H1.15301L1.27602 9.07738ZM3.79914 9.07738L3.93762 9.50813H4.38375L4.02992 9.76969L4.16836 10.1851L3.79914 9.92352L3.44527 10.1851L3.58375 9.76969L3.21453 9.50813H3.66066L3.79914 9.07738ZM6.33762 9.07738L6.47609 9.50813H6.92223L6.55301 9.76969L6.70687 10.1851L6.33762 9.92352L5.9684 10.1851L6.12223 9.76969L5.75301 9.50813H6.19918L6.33762 9.07738ZM8.86074 9.07738L9.01457 9.50813H9.44535L9.09148 9.76969L9.22996 10.1851L8.86074 9.92352L8.50687 10.1851L8.64535 9.76969L8.27609 9.50813H8.73766L8.86074 9.07738ZM11.3992 9.07738L11.5377 9.50813H11.9838L11.63 9.76969L11.7684 10.1851L11.3992 9.92352L11.0454 10.1851L11.1838 9.76969L10.8146 9.50813H11.2607L11.3992 9.07738ZM13.9377 9.07738L14.0762 9.50813H14.5223L14.1531 9.76969L14.3069 10.1851L13.9377 9.92352L13.5685 10.1851L13.7223 9.76969L13.3531 9.50813H13.7992L13.9377 9.07738Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_653_3386">
                      <rect width="20" height="20" rx="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <ul>                      
                <li className="curr">
                  <p >USD</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
      </div>
      <div className="footer-mid">
        <div className="dropdown">
          <div className="dropdown-heading">
            <h3> mettā muse</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="dropdown-links" hidden>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-heading">
            <h3>Quick Links</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="dropdown-links" hidden>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="payments">
          <h3 className="payment-heading">mettā muse Accepts</h3>
          <div className="payment-logos">
            <div className="googlepay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="30"
                viewBox="0 0 51 30"
                fill="none"
              >
                <rect
                  x="0.455357"
                  y="0.455357"
                  width="50.0893"
                  height="29.0893"
                  rx="4.09821"
                  fill="white"
                  stroke="#FFF2F5"
                  stroke-width="0.910714"
                />
                <path
                  d="M24.2478 15.1155V19.044H22.9199V9.3454H26.4301C26.8507 9.3387 27.2685 9.41031 27.6596 9.5561C28.0507 9.7019 28.4073 9.91901 28.7089 10.195C28.9946 10.4459 29.225 10.7473 29.3868 11.0821C29.5487 11.4169 29.6388 11.7784 29.6522 12.146C29.6655 12.5136 29.6017 12.88 29.4645 13.2244C29.3272 13.5688 29.1192 13.8843 28.8524 14.153L28.7089 14.2954C28.0958 14.8442 27.2766 15.1425 26.4301 15.1228L24.2478 15.1155ZM24.2478 10.5338V13.9565H26.4627C26.9545 13.9713 27.4293 13.7908 27.7736 13.4606C28.0199 13.2189 28.1853 12.9145 28.2493 12.585C28.3132 12.2556 28.2727 11.9158 28.133 11.6078C27.9933 11.2998 27.7605 11.0373 27.4635 10.8529C27.1665 10.6685 26.8185 10.5703 26.4627 10.5706L24.2478 10.5338ZM32.7056 12.1887C33.5535 12.1519 34.3831 12.4195 35.0248 12.9413C35.6053 13.4692 35.9144 14.2058 35.8727 14.9657V19.0588H34.6087V18.1184H34.5448C34.3181 18.4711 33.9976 18.762 33.6149 18.9625C33.2322 19.1629 32.8005 19.2659 32.3625 19.2613C31.6476 19.2831 30.9504 19.0493 30.4111 18.607C30.1556 18.4108 29.9509 18.1626 29.8124 17.881C29.6738 17.5994 29.6052 17.2918 29.6115 16.9815C29.5965 16.668 29.6612 16.3556 29.8003 16.0703C29.9393 15.785 30.1488 15.5351 30.4111 15.3414C31.0548 14.9057 31.8337 14.6834 32.626 14.7091C33.3004 14.6846 33.9696 14.8233 34.5696 15.1155V14.8601C34.574 14.649 34.5273 14.4397 34.4331 14.248C34.3388 14.0564 34.1995 13.8875 34.0257 13.754C33.6765 13.4552 33.2191 13.2936 32.7473 13.3022C32.4047 13.2992 32.0669 13.3784 31.7658 13.5324C31.4648 13.6864 31.2104 13.9102 31.0268 14.1824L29.8594 13.49C30.1764 13.0626 30.6043 12.7186 31.1026 12.4908C31.6008 12.263 32.1526 12.159 32.7056 12.1887ZM31.0268 17.011C31.0237 17.17 31.0621 17.3273 31.1388 17.469C31.2154 17.6108 31.328 17.7326 31.4664 17.8237C31.7573 18.0398 32.1186 18.154 32.4904 18.1466C33.05 18.1454 33.5861 17.9379 33.9852 17.5671C34.3831 17.216 34.6087 16.7262 34.6087 16.213C34.1066 15.877 33.4964 15.7148 32.8817 15.7539C32.4044 15.7362 31.9336 15.8627 31.5381 16.1148C31.3815 16.2134 31.253 16.3467 31.1639 16.503C31.0747 16.6592 31.0277 16.8337 31.0268 17.011ZM43.1396 12.4072L38.7176 21.9708H37.3506L39.0215 18.6217L36.1205 12.4072H37.5593L39.662 17.1767L41.7086 12.4072H43.1396Z"
                  fill="#5F6368"
                />
                <path
                  d="M18.8904 14.2679C18.8904 13.8898 18.859 13.5116 18.7951 13.1384H13.1992V15.2832H16.3963C16.3312 15.624 16.1937 15.949 15.992 16.2387C15.7903 16.5283 15.5285 16.7766 15.2224 16.9688V18.361H17.132C17.7127 17.8322 18.1691 17.1948 18.472 16.4898C18.7748 15.7848 18.9174 15.0279 18.8904 14.2679Z"
                  fill="#4285F4"
                />
                <path
                  d="M13.2073 19.7134C14.6504 19.7507 16.0544 19.2691 17.1336 18.3666L15.2213 16.9671C14.7619 17.2443 14.2413 17.4193 13.6991 17.4788C13.157 17.5382 12.6076 17.4805 12.0927 17.3101C11.5778 17.1396 11.111 16.8609 10.7278 16.4951C10.3445 16.1294 10.055 15.6862 9.8811 15.1992H7.92188V16.6356C8.41214 17.5601 9.16634 18.3377 10.0999 18.8814C11.0335 19.425 12.1095 19.7131 13.2073 19.7134Z"
                  fill="#34A853"
                />
                <path
                  d="M9.88169 15.209C9.63358 14.5182 9.63358 13.7698 9.88169 13.079V11.6426H7.92247C7.50478 12.4178 7.28711 13.2748 7.28711 14.144C7.28711 15.0132 7.50478 15.8701 7.92247 16.6454L9.88169 15.209Z"
                  fill="#FBBC04"
                />
                <path
                  d="M13.2073 10.7772C14.0513 10.7627 14.8671 11.0628 15.477 11.612L17.1727 10.0247C16.0915 9.06953 14.6574 8.54856 13.1747 8.57231C12.0834 8.57746 11.0149 8.86696 10.0878 9.4087C9.16057 9.95044 8.41091 10.7233 7.92188 11.6415L9.8811 13.0791C10.1102 12.4163 10.5543 11.8377 11.1509 11.4248C11.7476 11.0119 12.4668 10.7854 13.2073 10.7772Z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div className="master-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
              >
                <rect
                  x="0.446429"
                  y="0.446429"
                  width="49.1071"
                  height="29.1071"
                  rx="4.01786"
                  fill="white"
                  stroke="#FFF2F5"
                  stroke-width="0.892857"
                />
                <path
                  d="M19.6647 23.1875C24.6087 23.1875 28.6165 19.3399 28.6165 14.5937C28.6165 9.84754 24.6087 6 19.6647 6C14.7208 6 10.7129 9.84754 10.7129 14.5937C10.7129 19.3399 14.7208 23.1875 19.6647 23.1875Z"
                  fill="#EB001B"
                />
                <path
                  d="M29.8952 23.1875C34.8391 23.1875 38.847 19.3399 38.847 14.5937C38.847 9.84754 34.8391 6 29.8952 6C24.9512 6 20.9434 9.84754 20.9434 14.5937C20.9434 19.3399 24.9512 23.1875 29.8952 23.1875Z"
                  fill="#F79E1B"
                />
                <path
                  d="M28.6164 14.5922C28.6164 11.6458 27.0818 9.06769 24.7799 7.59448C22.478 9.19046 20.9434 11.7686 20.9434 14.5922C20.9434 17.4159 22.478 20.1168 24.7799 21.59C27.0818 20.1168 28.6164 17.5387 28.6164 14.5922Z"
                  fill="#FF5F00"
                />
              </svg>
            </div>
            <div className="paypal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="30"
                viewBox="0 0 51 30"
                fill="none"
              >
                <rect
                  x="0.455357"
                  y="0.455357"
                  width="50.0893"
                  height="29.0893"
                  rx="4.09821"
                  fill="white"
                  stroke="#FFF2F5"
                  stroke-width="0.910714"
                />
                <path
                  d="M31.3315 11.0168C31.5965 9.75634 31.3315 8.87398 30.5364 8.11768C29.7414 7.23533 28.2838 6.85718 26.4286 6.85718H20.9956C20.5981 6.85718 20.3331 7.10928 20.2006 7.48743L18.2129 20.2185C18.2129 20.4706 18.3454 20.7227 18.6104 20.7227H22.1882L22.7183 16.437L25.1035 13.6639L31.3315 11.0168Z"
                  fill="#003087"
                />
                <path
                  d="M31.3315 11.0156L31.0665 11.2677C30.404 14.7971 28.1513 16.0576 24.971 16.0576H23.5134C23.1158 16.0576 22.8508 16.3097 22.7183 16.6879L21.9232 21.6039L21.6582 22.8644C21.6582 23.1165 21.7907 23.3686 22.0557 23.3686H24.8385C25.236 23.3686 25.501 23.1165 25.501 22.8644V22.7383L26.0311 19.7131V19.5871C26.0311 19.335 26.4286 19.0829 26.6936 19.0829H27.0912C29.8739 19.0829 31.9941 18.0744 32.5241 15.0492C32.7892 13.7887 32.6566 12.7803 31.9941 12.024C31.8616 11.3938 31.5966 11.1417 31.3315 11.0156Z"
                  fill="#3086C8"
                />
                <path
                  d="M30.5369 10.7649C30.4044 10.6388 30.2719 10.6388 30.1394 10.6388C30.0069 10.6388 29.8744 10.6388 29.7419 10.5128C29.3443 10.3867 28.8143 10.3867 28.2842 10.3867H24.3089C24.1764 10.3867 24.0439 10.3867 24.0439 10.5128C23.7788 10.6388 23.6463 10.7649 23.6463 11.017L22.7188 16.5632V16.6892C22.7188 16.3111 23.1163 16.059 23.5138 16.059H25.2365C28.5492 16.059 30.6694 14.7985 31.332 11.2691V11.017C31.1995 10.8909 30.9345 10.7649 30.6694 10.7649H30.5369Z"
                  fill="#012169"
                />
              </svg>
            </div>
            <div className="amex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
              >
                <rect
                  x="0.446429"
                  y="0.446429"
                  width="49.1071"
                  height="29.1071"
                  rx="4.01786"
                  fill="#006FCF"
                  stroke="#FFF2F5"
                  stroke-width="0.892857"
                />
                <path
                  d="M12.6071 13.07L13.5969 15.3731H11.6249L12.6071 13.07ZM33.1643 13.1658H29.3572V14.1811H33.1029V15.7021H29.3649V16.8341H33.172V17.7413L35.8281 14.9852L33.172 12.1124L33.1643 13.1658ZM15.1801 10.293H20.289L21.4233 12.6686L22.4745 10.2856H35.736L37.1146 11.7466L38.5405 10.2856H44.6316L40.1314 15.0147L44.5855 19.7142H38.4037L37.0251 18.2533L35.5864 19.7142H13.9614L13.3296 18.2533H11.8845L11.2515 19.7142H6.25L10.4522 10.2856H14.8386L15.1801 10.293ZM26.2586 11.6164H23.3953L21.477 15.9575L19.3989 11.6164H16.5574V17.5216L13.923 11.6164H11.3743L8.3281 18.3834H10.3167L10.9484 16.9225H14.2683L14.9 18.3834H18.3784V13.5525L20.6177 18.3908H22.1395L24.3647 13.5672V18.392H26.2292L26.2599 11.6152L26.2586 11.6164ZM38.2029 15.0147L41.4396 11.6164H39.1096L37.0622 13.7354L35.0825 11.6164H27.5451V18.3908H34.9751L37.0392 16.2571L39.0188 18.3908H41.4166L38.2029 15.0147Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="apple-pay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="30"
                viewBox="0 0 51 30"
                fill="none"
              >
                <rect
                  x="0.455357"
                  y="0.455357"
                  width="50.0893"
                  height="29.0893"
                  rx="4.09821"
                  fill="white"
                  stroke="#FFF2F5"
                  stroke-width="0.910714"
                />
                <path
                  d="M13.9421 9.52728C14.3569 9.03929 14.6382 8.38391 14.564 7.71436C13.9572 7.74272 13.2168 8.09112 12.7879 8.57967C12.4029 8.99786 12.0623 9.68049 12.1509 10.322C12.8322 10.3776 13.5129 10.0016 13.9421 9.52728Z"
                  fill="black"
                />
                <path
                  d="M14.556 10.4473C13.5663 10.3917 12.7255 10.9756 12.2531 10.9756C11.7804 10.9756 11.0569 10.4751 10.2742 10.4888C9.25588 10.5027 8.31108 11.0449 7.79407 11.9069C6.73109 13.6308 7.5134 16.1889 8.54743 17.5931C9.04937 18.2882 9.65442 19.0529 10.4515 19.0254C11.2049 18.9976 11.5 18.5666 12.4153 18.5666C13.3302 18.5666 13.5961 19.0254 14.3935 19.0115C15.2201 18.9976 15.7371 18.3163 16.2391 17.6212C16.8152 16.8287 17.0506 16.0641 17.0654 16.0224C17.0506 16.0085 15.4712 15.4382 15.4565 13.7281C15.4417 12.2961 16.6967 11.6149 16.7558 11.5729C16.0471 10.5864 14.9398 10.4751 14.5557 10.4473"
                  fill="black"
                />
                <path
                  d="M24.4181 8.51147C26.5683 8.51147 28.0658 9.90648 28.0658 11.9374C28.0658 13.9756 26.5375 15.3778 24.3643 15.3778H21.9837V18.9414H20.2637V8.51147H24.4181ZM21.9837 14.0189H23.9572C25.4551 14.0189 26.3071 13.2601 26.3071 11.9446C26.3071 10.6294 25.4548 9.87756 23.9649 9.87756H21.9837V14.0189Z"
                  fill="black"
                />
                <path
                  d="M28.4922 16.7795C28.4922 15.4424 29.575 14.6763 31.5715 14.5606L33.714 14.4377V13.8594C33.714 13.0141 33.1228 12.5514 32.0708 12.5514C31.2028 12.5514 30.5729 12.9704 30.4429 13.6136H28.8913C28.9377 12.2622 30.289 11.2793 32.1169 11.2793C34.0827 11.2793 35.3652 12.2478 35.3652 13.7512V18.9406H33.7758V17.6902H33.7373C33.2841 18.5068 32.2856 19.0198 31.2028 19.0198C29.6057 19.0198 28.4922 18.1239 28.4922 16.7795ZM33.714 16.1075V15.5219L31.802 15.6375C30.7266 15.7026 30.1664 16.0783 30.1664 16.7359C30.1664 17.3721 30.7499 17.7841 31.6637 17.7841C32.8307 17.7841 33.714 17.0829 33.714 16.1075Z"
                  fill="black"
                />
                <path
                  d="M36.8282 21.7303V20.4802C36.9357 20.4944 37.1966 20.5088 37.3348 20.5088C38.095 20.5088 38.5251 20.2057 38.7863 19.4247L38.9399 18.9623L36.0293 11.3733H37.8261L39.8537 17.5311H39.8921L41.9194 11.3733H43.6704L40.6523 19.3452C39.961 21.1739 39.1701 21.774 37.4961 21.774C37.3655 21.774 36.9431 21.7595 36.8282 21.7303Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="opay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
              >
                <rect
                  x="0.446429"
                  y="0.446429"
                  width="49.1071"
                  height="29.1071"
                  rx="4.01786"
                  fill="#5A31F4"
                  stroke="#FFF2F5"
                  stroke-width="0.892857"
                />
                <path
                  d="M28.3336 11.7818C28.3336 13.8296 26.8284 15.2905 24.726 15.2905H22.7451C22.7124 15.291 22.6805 15.3005 22.6533 15.3179C22.626 15.3353 22.6046 15.3599 22.5916 15.3887C22.5832 15.4078 22.5789 15.4282 22.5788 15.4489V18.14C22.5788 18.1609 22.5745 18.1816 22.5661 18.2008C22.5578 18.2201 22.5455 18.2377 22.5301 18.2524C22.5146 18.2671 22.4963 18.2787 22.4761 18.2866C22.4559 18.2945 22.4343 18.2985 22.4126 18.2983H21.0263C20.9822 18.2983 20.9399 18.2815 20.9088 18.2516C20.8776 18.2217 20.8601 18.1811 20.8601 18.1387V8.43396C20.8595 8.40234 20.8691 8.37131 20.8873 8.345C20.9056 8.31869 20.9318 8.29834 20.9624 8.28664C20.9826 8.2785 21.0044 8.27433 21.0263 8.27436H24.7349C26.8284 8.27436 28.3336 9.73407 28.3336 11.7818ZM26.6046 11.7818C26.6046 10.6057 25.7631 9.74634 24.6224 9.74634H22.7451C22.7232 9.74634 22.7016 9.75047 22.6814 9.75849C22.6613 9.76651 22.643 9.77827 22.6275 9.79309C22.6121 9.80791 22.5998 9.8255 22.5915 9.84486C22.5831 9.86423 22.5788 9.88498 22.5788 9.90594V13.6503C22.5786 13.6713 22.5828 13.6922 22.5911 13.7116C22.5995 13.731 22.6118 13.7486 22.6274 13.7633C22.6428 13.7782 22.6612 13.7899 22.6814 13.798C22.7016 13.806 22.7232 13.81 22.7451 13.8099H24.6224C25.7631 13.8161 26.6046 12.9567 26.6046 11.7818ZM28.7453 16.4359C28.7307 16.1214 28.7989 15.8084 28.9435 15.5259C29.0881 15.2433 29.3045 15.0002 29.5728 14.8191C30.1137 14.4312 30.959 14.2298 32.2008 14.1881L33.5218 14.1439V13.7719C33.5218 13.0267 32.9975 12.7124 32.156 12.7124C31.3145 12.7124 30.7812 12.996 30.6598 13.4613C30.6494 13.494 30.6282 13.5225 30.5993 13.5425C30.5704 13.5624 30.5355 13.5727 30.4999 13.5718H29.1929C29.157 13.5722 29.1218 13.5615 29.0928 13.5411C29.0637 13.5207 29.0423 13.4919 29.0318 13.4588C29.0249 13.437 29.0231 13.4139 29.0267 13.3913C29.2211 12.2889 30.1828 11.4516 32.2161 11.4516C34.3799 11.4516 35.1612 12.4129 35.1612 14.2458V18.14C35.1611 18.161 35.1566 18.1818 35.148 18.2012C35.1394 18.2206 35.1269 18.2382 35.1112 18.2529C35.0955 18.2676 35.0769 18.2792 35.0566 18.287C35.0362 18.2948 35.0144 18.2987 34.9924 18.2983H33.6752C33.6312 18.2983 33.5889 18.2815 33.5577 18.2516C33.5265 18.2217 33.509 18.1811 33.509 18.1387V17.849C33.5094 17.825 33.5022 17.8014 33.4882 17.7814C33.4743 17.7614 33.4543 17.746 33.431 17.7373C33.4079 17.7286 33.3827 17.7265 33.3584 17.7313C33.3341 17.7361 33.3118 17.7475 33.2942 17.7643C32.8977 18.1743 32.2609 18.4702 31.2391 18.4702C29.7364 18.4702 28.7453 17.725 28.7453 16.4359ZM33.5218 15.5925V15.2905L31.8094 15.3765C30.9079 15.4207 30.3835 15.7767 30.3835 16.3782C30.3835 16.9233 30.8644 17.2253 31.7058 17.2253C32.8478 17.2253 33.5218 16.6361 33.5218 15.5925ZM36.4836 21.2398V20.1116C36.4839 20.088 36.4897 20.0647 36.5005 20.0435C36.5113 20.0222 36.527 20.0036 36.5462 19.9888C36.5653 19.974 36.5876 19.9633 36.6115 19.9576C36.6353 19.9519 36.6602 19.9512 36.6843 19.9557C36.8864 19.9913 37.091 20.0097 37.2969 20.0097C37.6496 20.0283 37.9984 19.9322 38.2873 19.7371C38.5761 19.542 38.7881 19.2592 38.889 18.9343L38.9747 18.6752C38.9875 18.6403 38.9875 18.6022 38.9747 18.5672L36.2316 11.8506C36.2157 11.8137 36.2148 11.7725 36.229 11.735C36.2432 11.6975 36.2715 11.6665 36.3084 11.648C36.3328 11.6356 36.36 11.6293 36.3876 11.6296H37.7176C37.7518 11.6297 37.7851 11.6397 37.8132 11.6583C37.8412 11.677 37.8628 11.7033 37.8749 11.7339L39.7369 16.4715C39.7484 16.5034 39.77 16.5309 39.7987 16.5503C39.8274 16.5697 39.8617 16.5799 39.8968 16.5796C39.9317 16.5795 39.9659 16.5691 39.9945 16.5498C40.0231 16.5305 40.0448 16.5031 40.0566 16.4715L41.6743 11.7475C41.6853 11.7149 41.7069 11.6866 41.7359 11.6667C41.7649 11.6468 41.7998 11.6364 41.8355 11.637H43.2115C43.2528 11.6372 43.2926 11.6517 43.3236 11.6779C43.3546 11.7041 43.3748 11.7401 43.3803 11.7794C43.3834 11.8056 43.3799 11.8321 43.3701 11.8567L40.4351 19.3161C39.7599 21.0508 38.6026 21.4927 37.3276 21.4927C37.0856 21.4991 36.844 21.4719 36.6102 21.4117C36.571 21.4025 36.5365 21.3801 36.513 21.3485C36.4896 21.317 36.4799 21.2784 36.4836 21.2398ZM11.9492 7.71454C10.2042 7.70202 8.51988 8.32851 7.23923 9.46643C7.18474 9.51401 7.15072 9.57942 7.14386 9.64982C7.137 9.72023 7.15779 9.79056 7.20215 9.84701L7.99246 10.877C8.01807 10.9118 8.05133 10.9407 8.08989 10.9616C8.12844 10.9826 8.17134 10.9952 8.21553 10.9985C8.25972 11.0018 8.30412 10.9957 8.34558 10.9806C8.38704 10.9656 8.42453 10.9419 8.4554 10.9114C8.91568 10.4726 9.46232 10.1262 10.0635 9.89221C10.6646 9.65826 11.3082 9.54148 11.9568 9.54869C14.668 9.54869 16.0836 11.4933 16.0836 13.4159C16.0836 15.5029 14.5964 16.9737 12.4581 17.0019C10.8059 17.0019 9.56031 15.9584 9.56031 14.5785C9.56173 14.2295 9.64433 13.8853 9.80209 13.571C9.95984 13.2566 10.1888 12.9801 10.4721 12.7615C10.5325 12.714 10.5708 12.6455 10.5787 12.571C10.5866 12.4965 10.5634 12.422 10.5143 12.3637L9.68308 11.3632C9.65798 11.3324 9.62666 11.3069 9.59101 11.288C9.55535 11.2692 9.51609 11.2574 9.47559 11.2536C9.43509 11.2497 9.39419 11.2537 9.35535 11.2653C9.3165 11.277 9.28052 11.2961 9.24956 11.3214C8.74045 11.7135 8.3289 12.2097 8.0449 12.7738C7.76191 13.3367 7.61461 13.9535 7.61393 14.5785C7.61393 16.954 9.7304 18.8164 12.4415 18.8311H12.4799C15.6987 18.7919 18.0262 16.5182 18.0262 13.411C18.0262 10.6524 15.8944 7.71454 11.9492 7.71454Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>Copyright © 2023 mettamuse. All rights reserved.</h4>
      </div>
    </div>
  );
};
export default Footer;
