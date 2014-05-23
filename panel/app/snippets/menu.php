<a ng-click="dropdown.toggle('menu', $event)" href="" class="menuToggle"><i class="fa fa-bars fa-lg"></i></a>

<ul ng-show="dropdown.isOpen('menu')" class="dropdown dropdown--white menu">
  <li><a ui-sref="page({uri: null, file: null})"><i class="fa fa-file-o"></i> <?php echo l('site.title') ?></a></li>
  <li><a ui-sref="users"><i class="fa fa-user"></i> <?php echo l('users.title') ?></a></li>
  <li><a href="./logout"><i class="fa fa-power-off"></i> <?php echo l('logout') ?></a></li>
</ul>

<span ng-show="loading" class="topbar__loader"></span>
<span ng-show="status.is('success')" class="topbar__status topbar__status--success"><i class="fa fa-check fa-lg"></i></span>
<span ng-show="status.is('error')" class="topbar__status topbar__status--error"><i class="fa fa-exclamation-circle"></i></span>