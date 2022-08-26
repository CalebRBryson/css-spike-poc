import './BemHeaderGroup.scss';

export default function BemHeaderGroup(){
  return(
    <div className="bem-header-group">
      <h2 className="bem-header-group__common-class">
        BEM
      </h2>
      <h2 className="bem-header-group__common-class--error">
        BEM Modified
      </h2>
    </div>
  )
}
