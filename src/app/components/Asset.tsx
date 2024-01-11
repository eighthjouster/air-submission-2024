export type AssetPropsType = {
  ext: string
  assets: {
    image: string
  }[],
  importedName: string
}
const Asset = ({ ext, assets, importedName }: AssetPropsType) => { 
  return (
  <>
    <div className="asset-entry media-thumbnail">
      <img className="asset-entry-image" src={assets.image} />
      <div className="asset-title">{ importedName }</div>
    </div>
  </>
)
};

export default Asset;
