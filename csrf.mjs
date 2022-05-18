// @ts-check
import csurf from 'csurf';

const csrfProtection = csurf({ 
  cookie: {
    sameSite: true,
    maxAge: 3600,
    // secure: true
  } 
})

export {
  csrfProtection
}
