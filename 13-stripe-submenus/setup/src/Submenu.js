import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const [columns, setColumns] = useState('col-2')
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  console.log(links)
  const container = useRef(null)
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
