import React, {PropTypes as T} from 'react'

const RatingIcon = (props) => (<span>★</span>)

export class Rating extends React.Component {
  render () {
    const {percentage} = this.props
    const style = {
      width: `${(percentage || 0) * 100}%`
    }
    return (
      <div className={'sprite'}>
        <div className={'top'} style={style}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
        <div className={'bottom'}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
      </div>
    )
  }
}

Rating.propTypes = {
  percentage: T.any
}

export default Rating
