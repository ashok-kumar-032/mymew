import React from 'react'

export const TopScrool = () => {
    const [backTop, setbackTop] = React.useState(false)
    const moveToTop = () => {
        document.documentElement.scrollTop = 0;
    }
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 100) {
            setbackTop(true);
        } else {
            setbackTop(false);
        }
    });
    return (
        <div>

            {backTop ? (
                <button onClick={moveToTop} className='btn position-fixed bottom-0 end-0 mb-4 me-4 bg_orange text-white top'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z"></path>
                    </svg>                </button>
            ) : (
                ""
            )}
        </div>
    )
}
