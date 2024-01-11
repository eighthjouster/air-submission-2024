export type AssetPropsType = {
  id: string,
}
const Asset = ({ id }: AssetPropsType) => (
  <>
    <div className="asset-entry">An Asset! { id }</div>
  </>
);

export default Asset;
