import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Trigger() {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} style={{align: 'center'}}>
      <span className="d-inline-block">
        <Button disabled style={{ pointerEvents: 'none'}}>
          &copy;
        </Button>
      </span>
    </OverlayTrigger>
  );
}

export default Trigger;