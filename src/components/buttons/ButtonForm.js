import { useHistory } from 'react-router-dom';
import { CButton } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ButtonForm({loading, action, url, iamModalClose}) {
   const history = useHistory()

   const cancel = () => {
      if (!iamModalClose) {
         history.push(`/${url}`)
      } else {
         iamModalClose()
      }
   }

   return (
      <div className="d-flex justify-content-end">
         <CButton size='md' color='danger' className='mr-2' onClick={cancel} disabled={loading}>
            <FontAwesomeIcon icon={faArrowLeft} />{' '}
            Cancel
         </CButton>
         <CButton type='submit' size='md' color={action === 'create' ? 'success' : 'info'} className='' disabled={loading}>
            <FontAwesomeIcon icon={faSave} />{' '}
            {action === 'create' ? 'Save' : 'Update'}
         </CButton>
      </div>
   );
}