import React from 'react';
import {Link} from 'react-router-dom';

export default function footer() {
  return (
    <div>
        <footer className="main-footer">
			<div className="pull-right hidden-xs">
			</div>
			<strong>Copyright &copy; 2019 <Link to="">Vector</Link>.</strong> All rights
			reserved.
		</footer>
    </div>
  )
}
