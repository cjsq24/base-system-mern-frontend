import { CButton } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt, faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function ButtonForm({reset, closeSearch}) {

   return (
      <div>
         <CButton color="warning" className='mr-2' onClick={() => reset()}>
            <FontAwesomeIcon icon={faRedoAlt} />{' '}
            Reset
         </CButton>
         <CButton color="danger" className='mr-2' onClick={closeSearch}>
            <FontAwesomeIcon icon={faArrowLeft} />{' '}
            Cancel
         </CButton>
         <CButton type="submit" color="info">
            <FontAwesomeIcon icon={faSearch} />{' '}
            Search
         </CButton>
      </div>
   );
}