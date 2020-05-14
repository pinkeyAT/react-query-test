# react-query testcase

Tried to set initialData for Cache and access/modify it in subcomponents.

Currently it does only work when cached data exists otherwise throws an error in each component on `useState(data[id])` because data[id] is not defined. In my opinion it should be as initialData was provided through nextjs `getServerSideProps` and passed to react-query. 
