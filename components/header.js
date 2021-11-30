import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'

const Header = (props) => {
  return (
    <>
      <div className={`header ${props.rootClassName} `}>
        <nav className="nav">
          <div className="container">
            <Link href="/">
              <a className="link large">Soft UI Design System</a>
            </Link>
            <div className="menu">
              <Link href="/">
                <a className="link1 large">Home</a>
              </Link>
              <Link href="/profile">
                <a className="link3 large">Profile</a>
              </Link>
              <Link href="/coming-soon">
                <a className="link4 large">Coming Soon</a>
              </Link>
            </div>
            <div className="container1">
              <div className="container2">
                <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
              </div>
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius40);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link1 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link1:hover {
            color: var(--dl-color-gray-500);
          }
          .link3 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link3:hover {
            color: var(--dl-color-gray-500);
          }
          .link4 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link4:hover {
            color: var(--dl-color-gray-500);
          }
          .container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon {
            width: 24px;
            height: 24px;
            display: none;
            margin-left: var(--dl-space-space-unit);
          }
          .rootClassName {
            display: none;
          }
          @media (max-width: 991px) {
            .nav {
              max-width: 960px;
            }
            .menu {
              display: none;
            }
            .icon {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .container2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
