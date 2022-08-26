import './BemHeaderGroup.scss';

export default () => {
  return(
    <div className="bem-header-group">
      <h2 className="bem-header-group__common-class">
        BEM STYLING
      </h2>
      <h2 className="bem-header-group__common-class--error">
        BEM STYLING Modified
      </h2>
    </div>
  )
}
