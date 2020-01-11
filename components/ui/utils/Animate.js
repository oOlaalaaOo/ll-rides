import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const propTypes = {
    customClasses: PropTypes.bool,

    appear: PropTypes.bool,
    enter: PropTypes.bool,
    leave: PropTypes.bool,

    appearTimeout: PropTypes.number,
    enterTimeout: PropTypes.number,
    leaveTimeout: PropTypes.number,

    appearName: PropTypes.string,
    appearActiveName: PropTypes.string,
    enterName: PropTypes.string,
    enterActiveName: PropTypes.string,
    leaveName: PropTypes.string,
    leaveActiveName: PropTypes.string,
    transitionName: PropTypes.string
}

const defaultProps = {
    customClasses: true,

    appear: true,
    enter: true,
    leave: true,

    appearTimeout: 500,
    enterTimeout: 500,
    leaveTimeout: 500,

    appearName: 'bounce',
    appearActiveName: 'bounce',
    enterName: 'bounce',
    enterActiveName: 'bounce',
    leaveName: 'bounceOut',
    leaveActiveName: 'bounceOut'
}


const Animate = ({customClasses, appear, enter, leave, appearName,
  appearActiveName, enterName, enterActiveName,leaveName, leaveActiveName,
  appearTimeout, enterTimeout, leaveTimeout, transitionName, ...otherProps}) => {
    let transitionClassName = transitionName

    if (true === customClasses) {
        transitionClassName = {
            appear: appearName,
            appearActive: appearActiveName,
            enter: enterName,
            enterActive: enterActiveName,
            leave: leaveName,
            leaveActive: leaveActiveName
        }
    }

    return (
      <ReactCSSTransitionGroup
          transitionAppear={appear}
          transitionAppearTimeout={appearTimeout}
          transitionEnter={enter}
          transitionEnterTimeout={enterTimeout}
          transitionLeave={leave}
          transitionLeaveTimeout={leaveTimeout}
          transitionName={transitionClassName}
      >
          <div className='animated'>
            {otherProps.children}
          </div>
      </ReactCSSTransitionGroup>
    )
}

//Static props.
Animate.displayName = 'Animate'
Animate.defaultProps = defaultProps
Animate.propTypes = propTypes

export default Animate
